# Safepay NodeJS SDK

Official nodejs library for [Safepay API](https://getsafepay.com).

## Installation

### With Yarn

```
yarn add safepay
```

### With NPM

```
npm install safepay
```

## Usage

Import and create a Safepay client by passing your config;

```typescript
import Safepay from 'safepay'

const safepay = new Safepay({
  environment: 'sandbox',
  key: 'foo',
  secret: 'bar'
})
```

You can now create payments and checkout links.

### Payments

#### Create payment

| Parameter  | Type         | Required |
| ---------- | ------------ | -------- |
| `amount`   | `number`     | Yes      |
| `currency` | `PKR`, `USD` | Yes      |

```typescript
const { token } = await safepay.payments.create({
  amount: 10000,
  currency: 'PKR'
})

// Pass `token` to create checkout link
```

### Checkout

#### Create checkout link

| Parameter     | Type      | Description                                   | Required |
| ------------- | --------- | --------------------------------------------- | -------- |
| `token`       | `string`  | Token from `safepay.payments.create`          | Yes      |
| `orderId`     | `string`  | Your internal invoice / order id              | Yes      |
| `cancelUrl`   | `string`  | Url to redirect to if user cancels the flow   | Yes      |
| `redirectUrl` | `string`  | Url to redirect to if user completes the flow | Yes      |
| `source`      | `string`  | Optional, defaults to `custom`                | No       |
| `webhooks`    | `boolean` | Optional, defaults to `false`                 | No       |

```typescript
const url = await safepay.checkout.create({
  token,
  orderId: 'T800',
  cancelUrl: 'http://example.com/cancel',
  redirectUrl: 'http://example.com/success',
  source: 'custom',
  webhooks: true
})

// redirect user to `url`
```

### Verification

#### Signature

If you're not using webhooks, at the end of a successful payment flow, Safepay will send a `POST` request to the `redirectUrl` you pass to `safepay.checkout.create` with a parameter in the body called `sig`. To make sure the request is coming from Safepay, you need to check its authenticity.

Payload from Safepay

```json
{
  "tracker": "...",
  "token": "...",
  "orderId": "T800",
  "ref": "...",
  "sig": "..."
}
```

> Note that the payload contains `tracker` and `token`. For `safepay.verify.signature`, please use `tracker`.

| Parameter   | Type     | Description                   | Required |
| ----------- | -------- | ----------------------------- | -------- |
| `token`     | `string` | `tracker` from `request.body` | Yes      |
| `signature` | `string` | `sig` from `request.body`     | Yes      |

```typescript
const valid = await safepay.verify.signature(token, signature)

// mark the invoice as paid if valid
// show an error if invalid
```
