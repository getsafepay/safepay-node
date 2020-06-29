'use strict'

const Safepay = require('../dist/safepay')

const config = {
  environment: "sandbox",
  sandbox: {
    baseUrl: "https://sandbox.api.getsafepay.com",
    apiKey: "sec_e5dd3b9f-48f4-46d7-a484-0a1502b4157asd6",
    apiSecret: "20b883bd5453c419f15951579f963af4b4678425502da1311a14927018487bec"
  },
  production: {
    baseUrl: "https://api.getsafepay.com",
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
  }
}

let sfpy = new Safepay(config)


// --------------------
// Payments
// --------------------

// initialize payment
sfpy.payments.create({
  amount: 1000,
  currency: "PKR",
}).then((response) => {
  return response.data
}).then((data) => {
  return sfpy.checkout.create({
    tracker: data.data.token,
    orderId: "1234",
    source: "custom",
    cancelUrl: "https://example.com/payment-cancelled",
    redirectUrl: "https://example.com/payment-complete"
  })
}).then((url) => {
  console.log(url)
  return 
}).catch((error) => {
  console.error(error)
})

// validate signature
function processPayment({ tracker, token, ref, sig, order_id }) {
  const valid = Safepay.validateWebhookSignature(tracker, sig, config.sandbox.apiSecret)
  if (!valid) {
    throw new Error("invalid payment signature. rejecting order...")
  }

  console.log("signature verified...")
  console.log("proceeding to mark order as paid")
}


// This is just for demostration purposes.
// In a real world scenario, Safepay will make
// a POST request with body encoded as a form.
// The params passed by Safepay to your server are:
// - tracker: this is the original tracker token for this payment
// - token: this is the transaction id
// - ref: this is the 6-digit transaction reference number
// - sig: signature returned by safepay to prove transaction integrity
processPayment({
  tracker: "track_9cbb0da9-6500-4ece-903d-d29e21b4478a",
  token: "trans_89eedd54-459a-403b-a40a-a8f406e174ad",
  ref: "660425",
  sig: "58f5d2570715d44023b4e0d1b4d35045f719518e76bd560e1e419e4fe73df812"
})
