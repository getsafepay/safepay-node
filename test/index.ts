import test from 'ava'

import { Safepay } from '../src'
import { SafepayEnvironment } from '../src/types'
import { config, configWithUrl } from './fixtures/config'

test('instantiate Safepay on sandbox', t => {
  const safepay = new Safepay(config.sandbox)

  t.truthy(safepay)
})

test('instantiate Safepay on production', t => {
  const safepay = new Safepay(config.production)

  t.truthy(safepay)
})

test('instantiate Safepay on sandbox with custom url', t => {
  const safepay = new Safepay(configWithUrl.sandbox)

  t.truthy(safepay)
})

test('instantiate Safepay on production with custom url', t => {
  const safepay = new Safepay(configWithUrl.production)

  t.truthy(safepay)
})

test('instantiate Safepay without environment', t => {
  t.throws(
    () =>
      new Safepay({
        environment: '' as SafepayEnvironment,
        key: 'foo',
        secret: 'bar'
      })
  )
})

test('instantiate Safepay with invalid environment', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'foo' as SafepayEnvironment,
        key: 'foo',
        secret: 'bar'
      })
  )
})

test('instantiate Safepay without key', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'sandbox',
        key: '',
        secret: 'bar'
      })
  )
})

test('instantiate Safepay without secret', t => {
  t.throws(
    () =>
      new Safepay({
        environment: 'sandbox',
        key: 'foo',
        secret: ''
      })
  )
})
