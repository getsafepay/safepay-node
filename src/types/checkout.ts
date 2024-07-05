export type CheckoutCreateParams = {
  cancelUrl: string
  orderId: string
  redirectUrl: string
  source?: 'custom'
  token: string
  webhooks?: boolean
}

export type CheckoutCreateData = string

export type SubscriptionCreateParamsWithoutToken = {
  cancelUrl: string
  redirectUrl: string
  planId: string
  reference: string
}

export type SubscriptionCreateParams = {
  cancelUrl: string
  redirectUrl: string
  planId: string
  authToken: string
  reference: string
}

export type AuthToken = string

export type SubscriptionCreateData = string
