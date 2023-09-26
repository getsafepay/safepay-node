import axios from 'axios'
import { AuthToken, SafepayConfig } from '../types'
import { buildApiUrlForSubscriptions } from '../utils/builder'

export class Authorization {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async create(): Promise<AuthToken> {
    const url = buildApiUrlForSubscriptions(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: AuthToken
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
