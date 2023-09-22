import { Safepay } from './src/index'
import {
  CANCEL_URL,
  Environment,
  PLAN_ID,
  REDIRECT_URL,
  SECRET_KEY_DEVELOPMENT
} from './src/utils'

const safepay = new Safepay({
  environment: Environment.Development,
  v1Secret: SECRET_KEY_DEVELOPMENT,
  apiKey: 'sec_asd12-2342s-1231s',
  webhookSecret: 'foo'
})

const generateUrl = (result: string) => {
  return safepay.checkout.createSubscriptionWithToken({
    cancelUrl: CANCEL_URL,
    redirectUrl: REDIRECT_URL,
    planId: PLAN_ID,
    authToken: result
  })
}

safepay.authorization
  .create()
  .then(result => {
    console.log(generateUrl(result))
  })
  .catch(error => {
    console.error(error)
  })

safepay.checkout
  .createSubscription({
    cancelUrl: CANCEL_URL,
    redirectUrl: REDIRECT_URL,
    planId: PLAN_ID
  })
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })
