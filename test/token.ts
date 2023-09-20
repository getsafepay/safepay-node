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

  const token = await subscribe.generateToken.create()

  t.snapshot(token)
})
