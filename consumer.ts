import { error } from 'console'
import { Safepay } from './src/index'
import {
  CANCEL_URL,
  Environment,
  PLAN_ID,
  REDIRECT_URL,
  SECRET_KEY_DEVELOPMENT,
  SECRET_KEY_SANDBOX,
  SUBSCRIPTION_ID,
  SubscriptionPauseBehavior
} from './src/utils'

const safepay = new Safepay({
  environment: Environment.Sandbox,
  v1Secret: SECRET_KEY_SANDBOX,
  apiKey: 'sec_asd12-2342s-1231s',
  webhookSecret: 'foo'
})

// const generateUrl = (result: string) => {
//   return safepay.checkout.createSubscriptionWithToken({
//     cancelUrl: CANCEL_URL,
//     redirectUrl: REDIRECT_URL,
//     planId: 'plan_33e626b3-d92e-40b3-a379-4f89d61f8c83',
//     authToken: result
//   })
// }

// safepay.authorization
//   .create()
//   .then(result => {
//     console.log(generateUrl(result))
//   })
//   .catch(error => {
//     console.error(error)
//   })

// safepay.checkout
//   .createSubscription({
//     cancelUrl: CANCEL_URL,
//     redirectUrl: REDIRECT_URL,
//     planId: PLAN_ID
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.error(error)
//   })

safepay.subscription
  .cancel('sub_42495c9e-96f4-4dab-82a6-0d15cec2bcbc')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error.response.data.error)
  })

// safepay.subscription
//   .pause({
//     behavior: SubscriptionPauseBehavior.MarkUncollectible,
//     subscriptionId: 'sub_42495c9e-96f4-4dab-82a6-0d15cec2bcbc'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     console.log(error.response.data)
//   })

// safepay.subscription
//   .resume('sub_42495c9e-96f4-4dab-82a6-0d15cec2bcbc')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => {
//     // console.log(error.response.data.error)
//     console.log(error.response.data.error)
//   })
