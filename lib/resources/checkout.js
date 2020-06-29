"use strict";

const {
  constructQueryParams
} = require('../utils/safepay-utils');

module.exports = function checkoutApi (api) {

  const SANDBOX_BASE_URL = "https://sandbox.api.getsafepay.com/components";
  const PRODUCTION_BASE_URL = "https://getsafepay.com/components";

  return {
  
    create (params={}) {

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

      const baseUrl = api.environment === "sandbox" ? SANDBOX_BASE_URL : PRODUCTION_BASE_URL;
      const qs = constructQueryParams({
        env: api.environment,
        source: "custom",
        ...params 
      })
      return `${baseUrl}?${qs}`
    }
  }
}