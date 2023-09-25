import {
  API_URL_DEVELOPMENT,
  API_URL_PRODUCTION,
  API_URL_SANDBOX,
  CHECKOUT_DEVELOPMENT,
  CHECKOUT_PRODUCTION,
  CHECKOUT_SANDBOX,
  Environment
} from './constants'

export function buildCheckoutUrl(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = CHECKOUT_DEVELOPMENT + '/pay'
  } else if (env === Environment.Sandbox) {
    url = CHECKOUT_SANDBOX + '/pay'
  } else {
    url = CHECKOUT_PRODUCTION + '/pay'
  }

  return url
}

export function buildSubscriptionCheckoutUrl(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = CHECKOUT_DEVELOPMENT + '/subscribe'
  } else if (env === Environment.Sandbox) {
    url = CHECKOUT_SANDBOX + '/subscribe'
  } else {
    url = CHECKOUT_PRODUCTION + '/subscribe'
  }

  return url
}

export function buildApiUrl(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = API_URL_DEVELOPMENT
  } else if (env === Environment.Sandbox) {
    url = API_URL_SANDBOX
  } else {
    url = API_URL_PRODUCTION
  }

  return url
}

export function buildApiUrlForSubscriptions(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = API_URL_DEVELOPMENT + '/client'
  } else if (env === Environment.Sandbox) {
    url = API_URL_SANDBOX + '/client'
  } else {
    url = API_URL_PRODUCTION + '/client'
  }

  return url
}
