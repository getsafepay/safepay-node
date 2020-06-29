'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var nodeify = require('./utils/nodeify');

function normalizeError(err) {
  throw {
    statusCode: err.statusCode,
    error: err.error.error
  };
}

var Api = function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this.environment = options.environment, this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;

    this.rq = axios.create({
      baseURL: options.baseUrl
    });
  }

  _createClass(Api, [{
    key: 'get',
    value: function get(params, cb) {
      return nodeify(this.rq({
        method: "get",
        url: params.url,
        params: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'post',
    value: function post(params, cb) {
      return nodeify(this.rq({
        method: "post",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'put',
    value: function put(params, cb) {
      return nodeify(this.rq({
        method: "put",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'patch',
    value: function patch(params, cb) {
      return nodeify(this.rq({
        method: "patch",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'delete',
    value: function _delete(params, cb) {
      return nodeify(this.rq({
        method: "delete",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }]);

  return Api;
}();

module.exports = Api;