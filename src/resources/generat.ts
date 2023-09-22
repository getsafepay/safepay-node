import { SafepayConfig } from '../types'
import {
  buildCheckoutUrl,
  buildSubscriptionCheckoutUrl
} from '../utils/builder'

import { Token, SubscriptionCheckout } from '.'

export class Helper {
  private config: SafepayConfig
  token: Token
  checkoutUrl: SubscriptionCheckout

  constructor(config: SafepayConfig) {
    this.config = config
    this.token = new Token(this.config)
    this.checkoutUrl = new SubscriptionCheckout(this.config)
  }

  getToken(): Promise<string> {
    // const token = this.token
    //   .create()
    //   .then(data => {
    //     return data
    //   })
    //   .catch(error => {
    //     return error
    //   })
    // console.log(token)

    return this.token.create()
  }

  async makeUrl(): Promise<string> {
    const url = this.getToken()
      .then(data => {
        return this.checkoutUrl.create({
          cancelUrl: '',
          redirectUrl: '',
          planId: '',
          authToken: data
        })
      })
      .catch(error => {
        return error
      })

    return url
  }
}
