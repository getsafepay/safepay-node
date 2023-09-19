import {
  API_URL_DEVELOPMENT,
  API_URL_PRODUCTION,
  API_URL_SANDBOX,
  CHECKOUT_DEVELOPMENT,
  CHECKOUT_PRODUCTION,
  CHECKOUT_SANDBOX,
  Environment,
  SUBSCRIPTION_DEVELOPMENT,
  SUBSCRIPTION_PRODUCTION,
  SUBSCRIPTION_SANDBOX
} from './constants'

export function buildCheckoutUrl(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = CHECKOUT_DEVELOPMENT
  } else if (env === Environment.Sandbox) {
    url = CHECKOUT_SANDBOX
  } else {
    url = CHECKOUT_PRODUCTION
  }

  return url
}

export function buildSubscriptionCheckoutUrl(env: Environment): string {
  let url
  if (env === Environment.Development) {
    url = SUBSCRIPTION_DEVELOPMENT
  } else if (env === Environment.Sandbox) {
    url = SUBSCRIPTION_SANDBOX
  } else {
    url = SUBSCRIPTION_PRODUCTION
  }

  return url
}

export function buildApiUrl(env: Environment): string {
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
