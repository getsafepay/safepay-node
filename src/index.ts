import { Checkout, Payments, Verify } from './resources'
import { SafepayConfig, SafepayOptions } from './types'
import { API_URL_PRODUCTION, API_URL_SANDBOX, validateOptions } from './utils'

export class Safepay {
  private config: SafepayConfig

  checkout: Checkout
  payments: Payments
  verify: Verify

  constructor(options: SafepayOptions) {
    validateOptions(options)

    this.config = {
      environment: options.environment,
      key: options.key,
      secret: options.secret,
      url:
        options.url ?? options.environment === 'production'
          ? API_URL_PRODUCTION
          : API_URL_SANDBOX
    }

    this.checkout = new Checkout(this.config)
    this.payments = new Payments(this.config)
    this.verify = new Verify(this.config)
  }
}
