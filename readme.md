# Safepay NodeJS SDK

Official nodejs library for [Safepay API](https://getsafepay.com).

## Installation

### With Yarn

```
yarn add @sfpy/node-sdk
```

### With NPM

```
npm install @sfpy/node-sdk
```

## Usage

Import and create a Safepay client by passing your config;

```typescript
import { Safepay } from '@sfpy/node-sdk'

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
const url = safepay.checkout.create({
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

| Parameter | Type     | Description                       | Required |
| --------- | -------- | --------------------------------- | -------- |
| `request` | `object` | The `req` object from your server | Yes      |

```typescript
const valid = safepay.verify.signature(request)

// mark the invoice as paid if valid
// show an error if invalid
```

#### Webhook

| Parameter | Type     | Description                       | Required |
| --------- | -------- | --------------------------------- | -------- |
| `secret`  | `string` | Your Safepay webhook secret       | Yes      |
| `request` | `object` | The `req` object from your server | Yes      |

```typescript
const valid = await safepay.verify.webhook(secret, request)

// mark the invoice as paid if valid
// show an error if invalid
```
