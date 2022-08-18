import { CheckoutCreateParams } from '../../src/types'

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
