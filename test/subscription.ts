import test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Safepay } from '../src'
import { config } from './fixtures/config'
import { SubscriptionPauseBehavior } from './fixtures/subscription'

let mock: MockAdapter

test.before(() => {
  mock = new MockAdapter(axios)

  mock
    .onPut('/subscriptions/v1/sub_d9a753fb-009b-477b-bf18-97e9d5d3409a')
    .reply(200, {
      data: {}
    })

  mock
    .onPut(
      '/subscriptions/v1/sub_d9a753fb-009b-477b-bf18-97e9d5d3409a/resumption'
    )
    .reply(200, {
      data: {}
    })

  mock
    .onPost('/subscriptions/v1/sub_d9a753fb-009b-477b-bf18-97e9d5d3409a/cancel')
    .reply(200, {
      data: {}
    })
})

test.afterEach(t => {
  mock?.reset()
})

test('pause subscription', async t => {
  const safepay = new Safepay(config.sandbox)

  const subscription = await safepay.subscription.pause({
    behavior: SubscriptionPauseBehavior.MarkUncollectible,
    subscriptionId: 'sub_d9a753fb-009b-477b-bf18-97e9d5d3409a'
  })

  t.snapshot(subscription)
})

test('resume subscription', async t => {
  const safepay = new Safepay(config.sandbox)

  const subscription = await safepay.subscription.resume(
    'sub_d9a753fb-009b-477b-bf18-97e9d5d3409a'
  )

  t.snapshot(subscription)
})

test('cancel subscription', async t => {
  const safepay = new Safepay(config.sandbox)

  const subscription = await safepay.subscription.cancel(
    'sub_d9a753fb-009b-477b-bf18-97e9d5d3409a'
  )

  t.snapshot(subscription)
})
