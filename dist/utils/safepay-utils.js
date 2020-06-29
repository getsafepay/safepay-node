"use strict";

var qs = require('qs');

function isDefined(value) {

  return typeof value !== "undefined";
}

function validateWebhookSignature(tracker, signature, secret) {

  /*
   * Verifies webhook signature
   *
   * @param {String} tracker
   * @param {String} signature
   * @param {String} secret
   *
   * @return {Boolean}
   */

  var crypto = require("crypto");

  if (!isDefined(tracker) || !isDefined(signature) || !isDefined(secret)) {

    throw Error("Invalid Parameters: Please give request body," + "signature sent in X-Razorpay-Signature header and " + "webhook secret from dashboard as parameters");
  }

  var expectedSignature = crypto.createHmac('sha256', secret).update(tracker).digest('hex');

  return expectedSignature === signature;
};

function constructQueryParams(_ref) {
  var env = _ref.env,
      tracker = _ref.tracker,
      _ref$orderId = _ref.orderId,
      orderId = _ref$orderId === undefined ? "" : _ref$orderId,
      _ref$source = _ref.source,
      source = _ref$source === undefined ? "" : _ref$source,
      redirectUrl = _ref.redirectUrl,
      cancelUrl = _ref.cancelUrl;

  if (!isDefined(tracker) || !isDefined(redirectUrl) || !isDefined(cancelUrl)) {

    throw Error("Invalid Parameters: Please provide all of," + "environment, tracker, redirectUrl and cancelUrl");
  }

  return qs.stringify({
    env: env,
    beacon: tracker,
    order_id: orderId,
    source: source,
    redirect_url: redirectUrl,
    cancel_url: cancelUrl
  });
}

module.exports = {
  validateWebhookSignature: validateWebhookSignature,
  constructQueryParams: constructQueryParams
};