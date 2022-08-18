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
    url = CHECKOUT_DEVELOPMENT
  } else if (env === Environment.Sandbox) {
    url = CHECKOUT_SANDBOX
  } else {
    url = CHECKOUT_PRODUCTION
  }

  return url
}

export function buildApiUrl(env: Environment): string {
  if (env === Environment.Development) {
    return API_URL_DEVELOPMENT
  } else if (env === Environment.Sandbox) {
    return API_URL_SANDBOX
  } else {
    return API_URL_PRODUCTION
  }
}
