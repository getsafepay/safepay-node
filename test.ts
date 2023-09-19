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

safepay.generateToken
  .create()
  .then(result => {
    console.log(`Auth token: ${result}`)
    const url = safepay.createCheckoutUrl.create({
      cancelUrl: CANCEL_URL,
      redirectUrl: REDIRECT_URL,
      planId: PLAN_ID,
      authToken: result
    })
    console.log(`Url: ${url}`)
  })
  .catch(error => {
    console.error(`Error generating token: ${error}`)
  })

// function successCallback(result: string) {
//   console.log(`Auth token: ${result}`);
// const url=  safepay.createCheckoutUrl.create({
//   cancelUrl:CANCEL_URL,
//   redirectUrl:REDIRECT_URL,
//   planId:PLAN_ID,
//   authToken:result
// })
// console.log(`Url: ${url}`)
// }

// function failureCallback(error: string) {
//   console.error(`Error generating token: ${error}`);
// }

// safepay.generateToken.create().then(successCallback).catch(failureCallback)
