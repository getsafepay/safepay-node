"use strict";

module.exports = function orderApi(api) {

  var BASE_URL = "/order/v1";

  return {
    create: function create() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments[1];


      /*
       * Initializes an Order
       *
       * @param {Object} params
       * - apiKey: Your Public Key for the environment
       * - amount: Amount in float e.g 1000.43
       * - currency: Currency Code either USD or PKR
       * - environment: either sandbox or "production"
       * @param {Function} callback
       *
       * @return {Promise}
       */

      var url = BASE_URL + "/init";
      var data = {
        environment: api.environment,
        client: api.apiKey,
        amount: params.amount,
        currency: params.currency
      };

      return api.post({
        url: url,
        data: data
      }, callback);
    }
  };
};