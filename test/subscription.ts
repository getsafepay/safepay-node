import test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Safepay } from '../src'
import { config } from './fixtures/config'
import { Subscription } from '../src/resources'
import { SubscriptionPauseBehavior } from '../src/utils'

let mock: MockAdapter

test.before(() => {
  mock = new MockAdapter(axios)

  mock
    .onPut('/subscriptions/v1/sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746')
    .reply(200, {
      data: {}
    })
})

test.after(() => {
  mock?.reset()
})

test('pause subscription', async t => {
  const safepay = new Safepay(config.sandbox)

  const subscription = await safepay.subscription.pause({
    behavior: SubscriptionPauseBehavior.MarkUncollectible,
    subscriptionId: 'sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746'
  })

  t.snapshot(subscription)
})

// test.before(() => {
//   mock = new MockAdapter(axios)

//   mock
//     .onPut(
//       '/subscriptions/v1/sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746/resumption'
//     )
//     .reply(200, {
//       data: {}
//     })
// })

// test.after(() => {
//   mock?.reset()
// })

// test('resume subscription', async t => {
//   const safepay = new Safepay(config.sandbox)

//   const subscription = await safepay.subscription.resume(
//     'sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746'
//   )

//   t.snapshot(subscription)
// })

// test.before(() => {
//   mock = new MockAdapter(axios)

//   mock
//     .onPut('/subscriptions/v1/sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746/cancel')
//     .reply(200, {
//       data: {}
//     })
// })

// test.after(() => {
//   mock?.reset()
// })

// test('cancel subscription', async t => {
//   const safepay = new Safepay(config.sandbox)

//   const subscription = await safepay.subscription.cancel(
//     'sub_c94f2ffa-78cf-4de5-80c0-f57e3d1ce746'
//   )

//   t.snapshot(subscription)
// })
