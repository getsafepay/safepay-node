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
  apiKey: 'sec_asd12-2342s-1231s',
  v1Secret: 'bar',
  webhookSecret: 'foo'
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
| `request` | `object` | The `req` object from your server | Yes      |

```typescript
const valid = await safepay.verify.webhook(request)

// mark the invoice as paid if valid
// show an error if invalid
```

### Subscriptions

#### Create subscription link

| Parameter     | Type     | Description                                                                        | Required |
| ------------- | -------- | ---------------------------------------------------------------------------------- | -------- |
| `planId`      | `string` | The plan id corresposnding to the plan you created on Safepay's merchant dashboard | Yes      |
| `cancelUrl`   | `string` | Url to redirect to if user cancels the flow                                        | Yes      |
| `redirectUrl` | `string` | Url to redirect to if user completes the flow                                      | Yes      |

```typescript
safepay.checkout
  .createSubscription({
    cancelUrl: 'https://www.google.com/',
    redirectUrl: 'https://www.google.com/',
    planId: 'plan_33e626b3-d92e-40b3-a379-4f89d61f8c83'
  })
  .then(url => {
    console.log(url)
  })
  .catch(error => {
    console.error(error)
  })

// redirect user to `url`
```

#### Create authorization token first and then generate subscription link

| Parameter     | Type     | Description                                                                        | Required |
| ------------- | -------- | ---------------------------------------------------------------------------------- | -------- |
| `planId`      | `string` | The plan id corresposnding to the plan you created on Safepay's merchant dashboard | Yes      |
| `cancelUrl`   | `string` | Url to redirect to if user cancels the flow                                        | Yes      |
| `redirectUrl` | `string` | Url to redirect to if user completes the flow                                      | Yes      |
| `authToken`   | `string` | The generated authentication token                                                 | Yes      |

```typescript
// To create subscription url

const generateUrl = (token: string) => {
  return safepay.checkout.createSubscriptionWithToken({
    cancelUrl: 'https://www.google.com/',
    redirectUrl: 'https://www.google.com/',
    planId: 'plan_33e626b3-d92e-40b3-a379-4f89d61f8c83',
    authToken: token
  })
}

// To generate authentication token

safepay.authorization
  .create()
  .then(token => {
    generateUrl(token)
    // redirect user to `url`
  })
  .catch(error => {
    console.log(error)
  })
```

#### Cancel Subscription

| Parameter        | Type     | Description                                | Required |
| ---------------- | -------- | ------------------------------------------ | -------- |
| `subscriptionId` | `string` | The id for subscription you wish to cancel | Yes      |

```typescript
safepay.subscription
  .cancel('sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error.response.data.error)
  })
```

#### Pause Subscription

| Parameter        | Type     | Description                                            | Required |
| ---------------- | -------- | ------------------------------------------------------ | -------- |
| `subscriptionId` | `string` | The id for subscription you wish to cancel             | Yes      |
| `behavior`       | `string` | 'KEEP_AS_READY' or 'MARK_UNCOLLECTIBLE' or 'MARK_VOID' | Yes      |

Opt for marking the payment transaction as 'KEEP_AS_READY' during the pause, to retain payment readiness during subscription pause and automatically adjust the billing cycle for uninterrupted service when the payment ends

Opt for marking the payment transaction as 'MARK_UNCOLLECTIBLE' during the pause, indicating no collection attempts during this period. Ideal for mainting clear billing records

Opt for marking the payment transaction as 'MARK_VOID' during the pause, rendering it null and preventing any accidental payment processing. A safeguard for for accurate financial records

```typescript
safepay.subscription
  .pause({
    behavior: SubscriptionPauseBehavior.MarkUncollectible,
    subscriptionId: 'sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746'
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error.response.data.error)
  })
```

#### Resume Subscription

| Parameter        | Type     | Description                                | Required |
| ---------------- | -------- | ------------------------------------------ | -------- |
| `subscriptionId` | `string` | The id for subscription you wish to cancel | Yes      |

```typescript
safepay.subscription
  .resume('sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error.response.data.error)
  })
```
