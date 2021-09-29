import axios from 'axios'

import {
  PaymentsCreateData,
  PaymentsCreateParams,
  SafepayConfig
} from '../types'

export class Payments {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async create({
    amount,
    currency
  }: PaymentsCreateParams): Promise<PaymentsCreateData> {
    const { data } = await axios.request<PaymentsCreateData>({
      baseURL: this.config.url,
      data: {
        amount,
        client: this.config.key,
        currency,
        environment: this.config.environment
      },
      method: 'post',
      url: '/order/v1/init'
    })

    return data
  }
}
