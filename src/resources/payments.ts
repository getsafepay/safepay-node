import axios from 'axios'

import {
  PaymentsCreateData,
  PaymentsCreateParams,
  SafepayConfig
} from '../types'
import { buildApiUrl } from '../utils/builder'

export class Payments {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async create({
    amount,
    currency
  }: PaymentsCreateParams): Promise<PaymentsCreateData> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: PaymentsCreateData
    }>({
      baseURL: url,
      data: {
        amount,
        client: this.config.apiKey,
        currency,
        environment: this.config.environment
      },
      method: 'post',
      url: '/order/v1/init'
    })

    return data
  }
}
