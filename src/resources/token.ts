import axios from 'axios'
import { SafepayConfig, SafepayConfigSubscriptions } from '../types'
import { buildApiUrl } from '../utils/builder'
import { SubscriptionCheckoutCreateData } from '../types/subscription'

export class Token {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async create(): Promise<SubscriptionCheckoutCreateData> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: SubscriptionCheckoutCreateData
    }>({
      baseURL: url,
      headers: { 'X-SFPY-MERCHANT-SECRET': this.config.v1Secret },
      method: 'post',
      url: '/passport/v1/token',
      data: {}
    })

    return data
  }
}
