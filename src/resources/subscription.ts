import { SafepayConfigSubscriptions } from '../types'
import {
  SubscriptionCheckoutCreateData,
  SubscriptionCheckoutCreateParams
} from '../types/subscription'
import { buildSubscriptionCheckoutUrl } from '../utils/builder'

export class Subscription {
  private config: SafepayConfigSubscriptions

  constructor(config: SafepayConfigSubscriptions) {
    this.config = config
  }

  create({
    cancelUrl,
    redirectUrl,
    planId,
    authToken
  }: SubscriptionCheckoutCreateParams): SubscriptionCheckoutCreateData {
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