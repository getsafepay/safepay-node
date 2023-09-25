import axios from 'axios'
import { SafepayConfig, SubscriptionCreateData } from '../types'
import { buildApiUrl } from '../utils/builder'

export class Subscription {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async cancel(subscriptionId: string): Promise<Subscription> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: Subscription
    }>({
      baseURL: url,
      headers: { 'X-SFPY-MERCHANT-SECRET': this.config.v1Secret },
      method: 'post',
      url: `/subscriptions/v1/${subscriptionId}/cancel`,
      data: {}
    })

    return data
  }

  async pause({
    subscriptionId,
    behavior
  }: {
    subscriptionId: string
    behavior: string
  }): Promise<Subscription> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: Subscription
    }>({
      baseURL: url,
      headers: { 'X-SFPY-MERCHANT-SECRET': this.config.v1Secret },
      method: 'put',
      url: `/subscriptions/v1/${subscriptionId}`,
      data: { pause_collection: { payment_collection_behavior: behavior } }
    })

    return data
  }

  async resume(subscriptionId: string): Promise<Subscription> {
    const url = buildApiUrl(this.config.environment)
    const {
      data: { data }
    } = await axios.request<{
      data: Subscription
    }>({
      baseURL: url,
      headers: { 'X-SFPY-MERCHANT-SECRET': this.config.v1Secret },
      method: 'put',
      url: `/subscriptions/v1/${subscriptionId}/resumption`,
      data: {}
    })

    return data
  }
}
