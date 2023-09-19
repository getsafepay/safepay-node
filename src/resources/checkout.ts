import {
  CheckoutCreateData,
  CheckoutCreateParams,
  SafepayConfig,
  SafepayConfigSubscriptions
} from '../types'
import { buildCheckoutUrl } from '../utils/builder'

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
}
