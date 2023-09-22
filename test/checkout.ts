import test from 'ava'

import { Safepay } from '../src'
import {
  CHECKOUT_PRODUCTION_URL,
  CHECKOUT_SANDBOX_URL,
  SUBSCRIPTION_DEVELOPMENT_URL,
  SUBSCRIPTION_PRODUCTION_URL,
  SUBSCRIPTION_SANDBOX_URL,
  checkoutParams,
  checkoutSubscriptionsParams
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

test('with subscription params', t => {
  const safepay = new Safepay(config.sandbox)

  const url = safepay.checkout.createSubscriptionWithToken(
    checkoutSubscriptionsParams
  )

  t.is(url, SUBSCRIPTION_SANDBOX_URL)
})

test('development subscription url', t => {
  const subscription = new Safepay(config.development)

  const url = subscription.checkout.createSubscriptionWithToken(
    checkoutSubscriptionsParams
  )

  t.is(url, SUBSCRIPTION_DEVELOPMENT_URL)
})

test('sandbox subscription url', t => {
  const subscription = new Safepay(config.sandbox)

  const url = subscription.checkout.createSubscriptionWithToken(
    checkoutSubscriptionsParams
  )

  t.is(url, SUBSCRIPTION_SANDBOX_URL)
})

test('production subscription url', t => {
  const safepay = new Safepay(config.production)

  const url = safepay.checkout.createSubscriptionWithToken(
    checkoutSubscriptionsParams
  )

  t.is(url, SUBSCRIPTION_PRODUCTION_URL)
})
