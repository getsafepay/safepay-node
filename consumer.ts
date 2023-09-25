import { Safepay } from './src/index'
import {
  Environment,
  SECRET_KEY_SANDBOX,
  SubscriptionPauseBehavior
} from './src/utils'

const safepay = new Safepay({
  environment: Environment.Sandbox,
  v1Secret: SECRET_KEY_SANDBOX,
  apiKey: 'sec_asd12-2342s-1231s',
  webhookSecret: 'foo'
})

const generateUrl = (token: string) => {
  return safepay.checkout.createSubscriptionWithToken({
    cancelUrl: 'https://www.google.com/',
    redirectUrl: 'https://www.google.com/',
    planId: 'plan_33e626b3-d92e-40b3-a379-4f89d61f8c83',
    authToken: token
  })
}

safepay.authorization
  .create()
  .then(token => {
    console.log(generateUrl(token))
  })
  .catch(error => {
    console.log(error)
  })

safepay.checkout
  .createSubscription({
    cancelUrl: 'https://www.google.com/',
    redirectUrl: 'https://www.google.com/',
    planId: 'plan_33e626b3-d92e-40b3-a379-4f89d61f8c83'
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })

safepay.subscription
  .cancel('sub_78330e74-531a-417c-a3c3-9084aa950895')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error.response.data.error)
  })

// safepay.subscription
//   .pause({
//     behavior: SubscriptionPauseBehavior.MarkUncollectible,
//     subscriptionId: 'sub_78330e74-531a-417c-a3c3-9084aa950895'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error.response.data.error)
//   })

// safepay.subscription
//   .resume('sub_78330e74-531a-417c-a3c3-9084aa950895')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error.response.data.error)
//   })
