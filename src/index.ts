import { Checkout, Payments, Verify } from './resources'
import { SafepayConfig, SafepayOptions } from './types'
import { Channel, validateOptions } from './utils'

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
      v1Secret: options.v1Secret,
      channel: options.channel || Channel.Accounts
    }

    this.checkout = new Checkout(this.config)
    this.payments = new Payments(this.config)
    this.verify = new Verify(this.config)
  }
}
