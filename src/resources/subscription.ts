import axios from 'axios'
import { SafepayConfig } from '../types'
import { buildApiUrlForSubscriptions } from '../utils/builder'
import { SubscriptionPauseBehavior } from '../utils'

export class Subscription {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  async cancel(subscriptionId: string): Promise<Subscription> {
    const url = buildApiUrlForSubscriptions(this.config.environment)
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
    behavior: SubscriptionPauseBehavior
  }): Promise<Subscription> {
    const url = buildApiUrlForSubscriptions(this.config.environment)
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
    const url = buildApiUrlForSubscriptions(this.config.environment)
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
