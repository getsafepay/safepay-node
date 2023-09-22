import axios from 'axios'
import { SafepayConfig, SubscriptionCreateData } from '../types'
import { buildApiUrl } from '../utils/builder'

export class Authorization {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async create(): Promise<SubscriptionCreateData> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: SubscriptionCreateData
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
