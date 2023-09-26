import test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Safepay } from '../src'
import { config } from './fixtures/config'

let mock: MockAdapter

test.before(() => {
  mock = new MockAdapter(axios)

  mock.onPost('passport/v1/token').reply(200, {
    data: {}
  })
})

test.after(() => {
  mock?.reset()
})

test('generare token', async t => {
  const subscribe = new Safepay(config.sandbox)

  const token = await subscribe.authorization.create()

  t.snapshot(token)
})

// test('generare token without v1', async t => {
//   const subscribe = new Safepay({
//     environment: Environment.Sandbox,
//     apiKey: 'sec_00000000-0000-0000-0000-000000000000',
//     v1Secret: 'gsgsg',
//     webhookSecret: 'foo'
//   })
//   t.throws(async () => await subscribe.authorization.create())
// })
