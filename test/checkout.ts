import test from 'ava'

import { Safepay } from '../src'
import {
  CHECKOUT_PRODUCTION_URL,
  CHECKOUT_SANDBOX_URL,
  checkoutParams
} from './fixtures/checkout'
import { config } from './fixtures/config'

test('sandbox url', t => {
  const safepay = new Safepay(config.sandbox)

  const url = safepay.checkout.create(checkoutParams)

  t.is(url, CHECKOUT_SANDBOX_URL)
})

test('production url', t => {
  const safepay = new Safepay(config.production)

  const url = safepay.checkout.create(checkoutParams)

  t.is(url, CHECKOUT_PRODUCTION_URL)
})

test('with optional params', t => {
  const safepay = new Safepay(config.sandbox)

  const url = safepay.checkout.create({
    ...checkoutParams,
    source: 'custom',
    webhooks: false
  })

  t.is(url, CHECKOUT_SANDBOX_URL)
})
