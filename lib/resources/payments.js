"use strict";

module.exports = function orderApi (api) {

  const BASE_URL = "/order/v1";

  return {
  
    create (params={}, callback) {

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

      const url = `${BASE_URL}/init`;
      const data = {
        environment: api.environment,
        client: api.apiKey,
        amount: params.amount, 
        currency: params.currency
      }

      return api.post({
        url,
        data        
      }, callback);
    }
  }
}