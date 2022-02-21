import test from 'ava'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { Safepay } from '../src'
import { config } from './fixtures/config'

let mock: MockAdapter

test.before(() => {
  mock = new MockAdapter(axios)

  mock.onPost('/order/v1/init').reply(200, {
    data: {
      token: 'token'
    }
  })
})

test.after(() => {
  mock?.reset()
})

test('create payment', async t => {
  const safepay = new Safepay(config.sandbox)

  const { token } = await safepay.payments.create({
    amount: 1000,
    currency: 'USD'
  })

  t.snapshot(token)
})
