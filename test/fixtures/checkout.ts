import { CheckoutCreateParams } from '../../src/types'
import { SubscriptionCheckoutCreateParams } from '../../src/types/subscription'

export const checkoutParams: CheckoutCreateParams = {
  cancelUrl: 'cancel',
  orderId: 'T800',
  redirectUrl: 'success',
  token: '1234'
}

export const CHECKOUT_SANDBOX_URL =
  'https://sandbox.api.getsafepay.com/checkout/pay?beacon=1234&cancel_url=cancel&env=sandbox&order_id=T800&redirect_url=success&source=custom&webhooks=false'

export const CHECKOUT_PRODUCTION_URL =
  'https://getsafepay.com/checkout/pay?beacon=1234&cancel_url=cancel&env=production&order_id=T800&redirect_url=success&source=custom&webhooks=false'

export const checkoutSubscriptionsParams: SubscriptionCheckoutCreateParams = {
  planId: 'planId',
  authToken: 'authToken',
  cancelUrl: 'cancel',
  redirectUrl: 'success'
}

export const SUBSCRIPTION_DEVELOPMENT_URL =
  'https://dev.api.getsafepay.com/checkout/subscribe?plan_id=planId&auth_token=authToken&env=development&cancel_url=cancel&redirect_url=success'

export const SUBSCRIPTION_SANDBOX_URL =
  'https://sandbox.api.getsafepay.com/checkout/subscribe?plan_id=planId&auth_token=authToken&env=sandbox&cancel_url=cancel&redirect_url=success'

export const SUBSCRIPTION_PRODUCTION_URL =
  'https://getsafepay.com/checkout/subscribe?plan_id=planId&auth_token=authToken&env=production&cancel_url=cancel&redirect_url=success'
