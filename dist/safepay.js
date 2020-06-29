'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = require('./api');
var pkg = require('../package.json');

var _require = require('./utils/safepay-utils'),
    _validateWebhookSignature = _require.validateWebhookSignature;

var Safepay = function () {
  _createClass(Safepay, null, [{
    key: 'validateWebhookSignature',
    value: function validateWebhookSignature() {
      return _validateWebhookSignature.apply(undefined, arguments);
    }
  }]);

  function Safepay() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Safepay);

    try {
      this.validate(options);
    } catch (err) {
      throw err;
    }

    this.api = this.createClient(options);
    this.addResources();
  }

  _createClass(Safepay, [{
    key: 'createClient',
    value: function createClient(_ref) {
      var environment = _ref.environment,
          sandbox = _ref.sandbox,
          production = _ref.production;


      if (environment === "sandbox") {
        return new Api({
          environment: environment,
          baseUrl: sandbox.baseUrl,
          apiKey: sandbox.apiKey,
          apiSecret: sandbox.apiSecret
        });
      }

      return new Api({
        environment: environment,
        baseUrl: production.baseUrl,
        apiKey: production.apiKey,
        apiSecret: production.apiSecret
      });
    }
  }, {
    key: 'validate',
    value: function validate(_ref2) {
      var environment = _ref2.environment,
          sandbox = _ref2.sandbox,
          production = _ref2.production;


      var empty = void 0;
      switch (environment) {
        case "sandbox":
          empty = this.empty(sandbox);
          break;
        case "production":
          empty = this.empty(production);
          break;
        default:
          throw new Error('invalid environment');
      }

      if (empty) {
        throw new Error('api keys for ' + environment + ' are missing');
      }
    }
  }, {
    key: 'empty',
    value: function empty() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return Object.keys(options).every(function (o) {
        return !options[o];
      });
    }
  }, {
    key: 'addResources',
    value: function addResources() {
      Object.assign(this, {
        payments: require('./resources/payments')(this.api),
        checkout: require('./resources/checkout')(this.api)
      });
    }
  }]);

  return Safepay;
}();

Safepay.VERSION = pkg.version;


module.exports = Safepay;