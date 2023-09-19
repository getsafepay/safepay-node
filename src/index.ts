import {
  Checkout,
  GenerateToken,
  Payments,
  Verify,
  Subscription
} from './resources'
import {
  SafepayConfig,
  SafepayConfigSubscriptions,
  SafepayOptions,
  SafepayOptionsSubscriptions
} from './types'
import { validateOptions, validateOptionsForSubscriptions } from './utils'

export class Safepay {
  private config: SafepayConfig

  checkout: Checkout
  payments: Payments
  verify: Verify

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
  }
}

export class Subscribe {
  private config: SafepayConfigSubscriptions

  generateToken: GenerateToken
  createCheckoutUrl: Subscription

  constructor(options: SafepayOptionsSubscriptions) {
    validateOptionsForSubscriptions(options)

    this.config = {
      environment: options.environment,
      v1Secret: options.v1Secret
    }

    this.generateToken = new GenerateToken(this.config)
    this.createCheckoutUrl = new Subscription(this.config)
  }
}
