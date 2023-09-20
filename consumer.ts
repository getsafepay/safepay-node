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
  apiKey: 'sec_0000',
  webhookSecret: 'foo'
})

const generateUrl = (result: string) => {
  return safepay.subscriptionCheckout.create({
    cancelUrl: CANCEL_URL,
    redirectUrl: REDIRECT_URL,
    planId: PLAN_ID,
    authToken: result
  })
}

safepay.token
  .create()
  .then(result => {
    const url = generateUrl(result)
    console.log(`Url: ${url}`)
  })
  .catch(error => {
    console.error(`Error generating token: ${error}`)
  })
