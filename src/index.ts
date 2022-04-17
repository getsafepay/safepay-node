import { Checkout, Payments, Verify } from './resources'
import { SafepayConfig, SafepayOptions } from './types'
import {
  API_URL_PRODUCTION,
  API_URL_SANDBOX,
  Environment,
  validateOptions
} from './utils'

export class Safepay {
  private config: SafepayConfig
  private url: string

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

    this.url =
      options.environment === Environment.Production
        ? API_URL_PRODUCTION
        : API_URL_SANDBOX

    this.checkout = new Checkout(this.config)
    this.payments = new Payments(this.config)
    this.verify = new Verify(this.config)
  }
}
