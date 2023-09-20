import test from 'ava'

import { Safepay } from '../src'
import { SafepayEnvironment } from '../src/types'
import { config, configSubscriptions } from './fixtures/config'
import { Subscription } from '../src/resources'

// Payment

test('instantiate Safepay on sandbox', t => {
  const safepay = new Safepay(config.sandbox)

  t.truthy(safepay)
})

test('instantiate Safepay on production', t => {
  const safepay = new Safepay(config.production)

  t.truthy(safepay)
})

test('instantiate Safepay without environment', t => {
  t.throws(
    () =>
      new Safepay({
        environment: '' as SafepayEnvironment,
        apiKey: 'foo',
        v1Secret: 'bar',
        webhookSecret: 'foo'
      })
  )
})

test('instantiate Safepay with invalid environment', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'foo' as SafepayEnvironment,
        apiKey: 'foo',
        v1Secret: 'bar',
        webhookSecret: 'foo'
      })
  )
})

test('instantiate Safepay without key', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'sandbox' as SafepayEnvironment,
        apiKey: '',
        v1Secret: 'bar',
        webhookSecret: 'foo'
      })
  )
})

test('instantiate Safepay without secret', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'sandbox' as SafepayEnvironment,
        apiKey: 'foo',
        v1Secret: '',
        webhookSecret: 'foo'
      })
  )
})

test('instantiate Safepay without webhook secret', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'sandbox' as SafepayEnvironment,
        apiKey: 'foo',
        v1Secret: 'bar',
        webhookSecret: ''
      })
  )
})

// Subscription

test('instantiate Subscription Checkout on development', t => {
  const subscription = new Safepay(config.development)

  t.truthy(subscription)
})

test('instantiate Subscription Checkout on sandbox', t => {
  const subscription = new Safepay(config.sandbox)

  t.truthy(subscription)
})

test('instantiate Subscription Checkout on production', t => {
  const subscription = new Safepay(config.production)

  t.truthy(subscription)
})
