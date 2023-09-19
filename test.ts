import { Subscribe } from './src/index'
import {
  CANCEL_URL,
  Environment,
  PLAN_ID,
  REDIRECT_URL,
  SECRET_KEY_DEVELOPMENT
} from './src/utils'

const safepay = new Subscribe({
  environment: Environment.Development,
  v1Secret: SECRET_KEY_DEVELOPMENT
})

const generateUrl = (result: string) => {
  return safepay.createCheckoutUrl.create({
    cancelUrl: CANCEL_URL,
    redirectUrl: REDIRECT_URL,
    planId: PLAN_ID,
    authToken: result
  })
}

safepay.generateToken
  .create()
  .then(result => {
    const url = generateUrl(result)
    console.log(`Url: ${url}`)
  })
  .catch(error => {
    console.error(`Error generating token: ${error}`)
  })
