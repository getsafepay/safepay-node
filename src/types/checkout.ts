export type CheckoutCreateParams = {
  cancelUrl: string
  orderId: string
  redirectUrl: string
  source?: 'custom'
  token: string
  webhooks?: boolean
}

export type CheckoutCreateData = string
