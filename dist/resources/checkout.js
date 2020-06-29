"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require('../utils/safepay-utils'),
    constructQueryParams = _require.constructQueryParams;

module.exports = function checkoutApi(api) {

  var SANDBOX_BASE_URL = "https://sandbox.api.getsafepay.com/components";
  var PRODUCTION_BASE_URL = "https://getsafepay.com/components";

  return {
    create: function create() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


      /*
       * Constructs the checkout URL 
       *
       * @param {Object} params
       * - orderId: Your internal system order id (optional)
       * - tracker: The Safepay tracker token (required)
       * - redirectUrl: An endpoint on your server Safepay will 
       *   use to make a post request to after your customer
       *   has successfully completed his payment (required)
       * - cancelUrl: An endpoint on your server Safepay will
       *   use to make a simplet redirect to if your customer
       *   chooses to cancel payment. (required)
       *
       * @return {String}
       */

      var baseUrl = api.environment === "sandbox" ? SANDBOX_BASE_URL : PRODUCTION_BASE_URL;
      var qs = constructQueryParams(_extends({
        env: api.environment,
        source: "custom"
      }, params));
      return baseUrl + "?" + qs;
    }
  };
};