import {
  CheckoutCreateData,
  CheckoutCreateParams,
  SafepayConfig
} from '../types'
import {
  SubscriptionCreateData,
  SubscriptionCreateParams,
  SubscriptionCreateParamsWithoutToken
} from '../types/checkout'
import {
  buildCheckoutUrl,
  buildSubscriptionCheckoutUrl
} from '../utils/builder'
import { Authorization } from './authorization'

export class Checkout {
  private config: SafepayConfig
  authorization: Authorization

  constructor(config: SafepayConfig) {
    this.config = config
    this.authorization = new Authorization(this.config)
  }

  create({
    cancelUrl,
    orderId,
    redirectUrl,
    source = 'custom',
    token,
    webhooks = false
  }: CheckoutCreateParams): CheckoutCreateData {
    const url = buildCheckoutUrl(this.config.environment)

    const params = new URLSearchParams({
      beacon: token,
      cancel_url: cancelUrl,
      env: this.config.environment,
      order_id: orderId,
      redirect_url: redirectUrl,
      source,
      webhooks: String(webhooks)
    }).toString()

    return `${url}?${params}`
  }

  createSubscription({
    cancelUrl,
    redirectUrl,
    planId
  }: SubscriptionCreateParamsWithoutToken): Promise<SubscriptionCreateData> {
    const url = this.authorization
      .create()
      .then(data => {
        return this.createSubscriptionWithToken({
          cancelUrl: cancelUrl,
          redirectUrl: redirectUrl,
          planId: planId,
          authToken: data
        })
      })
      .catch(error => {
        return error
      })
    return url
  }

  createSubscriptionWithToken({
    cancelUrl,
    redirectUrl,
    planId,
    authToken
  }: SubscriptionCreateParams): SubscriptionCreateData {
    const url = buildSubscriptionCheckoutUrl(this.config.environment)

    const params = new URLSearchParams({
      plan_id: planId,
      auth_token: authToken,
      env: this.config.environment,
      cancel_url: cancelUrl,
      redirect_url: redirectUrl
    }).toString()

    return `${url}?${params}`
  }
}
