import { Checkout, Payments, Verify, Token } from './resources'
import { Helper } from './resources/generat'
import { SubscriptionCheckout } from './resources/subscription'
import { SafepayConfig, SafepayOptions } from './types'
import { validateOptions } from './utils'

export class Safepay {
  private config: SafepayConfig

  checkout: Checkout
  payments: Payments
  verify: Verify
  token: Token
  subscriptionCheckout: SubscriptionCheckout
  helper: Helper

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
    this.token = new Token(this.config)
    this.subscriptionCheckout = new SubscriptionCheckout(this.config)
    this.helper = new Helper(this.config)
  }
}
