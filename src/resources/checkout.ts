import {
  CheckoutCreateData,
  CheckoutCreateParams,
  SafepayConfig
} from '../types'
import { Environment, URL_PRODUCTION, URL_SANDBOX } from '../utils'

export class Checkout {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  create({
    cancelUrl,
    orderId,
    redirectUrl,
    source = 'custom',
    token,
    webhooks = false
  }: CheckoutCreateParams): CheckoutCreateData {
    const url =
      this.config.environment === Environment.Production
        ? URL_PRODUCTION
        : URL_SANDBOX

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
}
