# Safepay NodeJS SDK

Official nodejs library for [Safepay API](https://getsafepay.com).

Read up here for getting started and understanding the payment flow with Safepay: <https://safepay.helpscoutdocs.com/article/50-starting-with-safepay-step-by-step-guide>

## Installation

```bash
npm i  safepay
```

### Basic Usage

Instantiate the safepay instance with a `config` object

```js
const config = {
  environment: "sandbox",
  sandbox: {
    baseUrl: "https://sandbox.api.getsafepay.com",
    apiKey: "sec_e5dd3b9f-48f4-46d7-a484-0a1502b41576",
    apiSecret: "20b883bd5453c419f15951579f963af4b4678425502da1311a14927018487bec"
  },
  production: {
    baseUrl: "https://api.getsafepay.com",
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
  }
}

let sfpy = new Safepay(config)
```

Every resource method returns a promise.

```js
instance.payments
  .create({
    key: "value"
  })
  .then(response => {
    // handle success
  })
  .catch(error => {
    // handle error
  });
```

If you want to use callbacks instead of promises, every resource method will accept a callback function as a last parameter. The callback functions will behave as [Error First Callbacks ](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)

```js
instance.payments.all(
  {
    from: '2016-08-01',
    to: '2016-08-20',
  },
  (error, response) => {
    if (error) {
      // handle error
    } else {
      // handle success
    }
  }
);
```

## Supported Resources

- Payments

- Checkout

---

## Initializing an order

Before you can redirect your customer to Safepay, you have to initialize an order. After you initialize the Safepay client, you can make the following request to create a payment

```js
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
```

## Verifying the signature

When your user completes a payment, Safepay will make a `POST` request to your `redirectUrl` with the following data:
```
tracker,
token,
orderId,
ref,
sig
```

Before you mark the order as paid, you should verify the signature like so
```js
// validate signature
function processPayment({ tracker, token, ref, sig, order_id }) {
  const valid = Safepay.validateWebhookSignature(tracker, sig, config.sandbox.apiSecret)
  if (!valid) {
    throw new Error("invalid payment signature. rejecting order...")
  }

  console.log("signature verified...")
  console.log("proceeding to mark order as paid")
}
```

After validating the signature, store the relevant Safepay payment IDs in your database alongside the order.

## Development

```bash
npm install
```

## Testing

```bash
npm test
```

## Release

1.  Switch to `master` branch. Make sure you have the latest changes in the local master
2.  Update the `CHANGELOG.md` & bump the version in `package.json`
3.  Commit
4.  Tag the release & push to Github
5.  Create a release on GitHub using the website with more details about the release
6.  Publish to npm with `npm publish` command

## Licence

MIT Licensed. See [LICENSE.txt](LICENSE.txt) for more details
