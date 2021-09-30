import test from 'ava'
import { setupTests } from 'ava-nock'

import { Safepay } from '../src'
import { config } from './fixtures/config'

setupTests()

test('create payment', async t => {
  const safepay = new Safepay(config.sandbox)

  const { token } = await safepay.payments.create({
    amount: 1000,
    currency: 'USD'
  })

  t.snapshot(token)
})
