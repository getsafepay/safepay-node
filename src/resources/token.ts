import axios from 'axios'
import { PaymentsCreateData, SafepayConfigSubscriptions } from '../types'
import { buildApiUrl } from '../utils/builder'
import { SubscriptionCheckoutCreateData } from '../types/subscription'

export class GenerateToken {
  private config: SafepayConfigSubscriptions

  constructor(config: SafepayConfigSubscriptions) {
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
