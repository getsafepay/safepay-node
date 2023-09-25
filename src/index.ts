import {
  Checkout,
  Payments,
  Verify,
  Authorization,
  Subscription
} from './resources'

import { SafepayConfig, SafepayOptions } from './types'
import { validateOptions } from './utils'

export class Safepay {
  private config: SafepayConfig

  checkout: Checkout
  payments: Payments
  verify: Verify
  authorization: Authorization
  subscription: Subscription

  constructor(options: SafepayOptions) {
    validateOptions(options)

    this.config = {
      environment: options.environment,
      apiKey: options.apiKey,
      webhookSecret: options.webhookSecret,
      v1Secret: options.v1Secret
    }

    this.checkout = new Checkout(this.config)
    this.payments = new Payments(this.config)
    this.verify = new Verify(this.config)
    this.authorization = new Authorization(this.config)
    this.subscription = new Subscription(this.config)
  }
}
