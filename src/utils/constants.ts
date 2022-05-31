export const API_URL_PRODUCTION = 'https://api.getsafepay.com'
export const API_URL_SANDBOX = 'https://sandbox.api.getsafepay.com'
export const API_URL_DEVELOPMENT = 'https://dev.api.getsafepay.com'

export const URL_PRODUCTION = 'https://getsafepay.com/components'
export const URL_SANDBOX = 'https://sandbox.api.getsafepay.com/components'

export const CHECKOUT_PRODUCTION = 'https://getsafepay.com/checkout/pay'
export const CHECKOUT_SANDBOX =
  'https://sandbox.api.getsafepay.com/checkout/pay'
export const CHECKOUT_DEVELOPMENT =
  'https://dev.api.getsafepay.com/checkout/pay'

export const PROD_BASE = 'https://getsafepay.com'
export const SANDBOX_BASE = 'https://sandbox.api.getsafepay.com'
export const DEVELOPMENT_BASE = 'https://dev.api.getsafepay.com'

export const ACCOUNTS_ROUTE = '/components'
export const CARDS_ROUTE = '/checkout/pay'

export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
  Development = 'development'
}

export enum Channel {
  Cards = 'cards',
  Accounts = 'accounts'
}
