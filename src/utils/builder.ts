import {
  ACCOUNTS_ROUTE,
  API_URL_DEVELOPMENT,
  API_URL_PRODUCTION,
  API_URL_SANDBOX,
  CARDS_ROUTE,
  Channel,
  DEVELOPMENT_BASE,
  Environment,
  PROD_BASE,
  SANDBOX_BASE
} from './constants'

export function buildCheckoutUrl(channel: Channel, env: Environment): string {
  let baseUrl, channelRoute
  if (env === Environment.Development) {
    baseUrl = DEVELOPMENT_BASE
  } else if (env === Environment.Sandbox) {
    baseUrl = SANDBOX_BASE
  } else {
    baseUrl = PROD_BASE
  }

  if (channel === Channel.Cards) {
    channelRoute = CARDS_ROUTE
  } else {
    channelRoute = ACCOUNTS_ROUTE
  }

  return `${baseUrl}${channelRoute}`
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
