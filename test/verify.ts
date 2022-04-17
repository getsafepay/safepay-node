import test from 'ava'

import { Safepay } from '../src'
import { config } from './fixtures/config'
import {
  requestSignatureExpress,
  requestSignatureFastify,
  requestWebhookExpress,
  requestWebhookFastify
} from './fixtures/verify'

test('signature with express', t => {
  const safepay = new Safepay(config.production)

  const valid = safepay.verify.signature(requestSignatureExpress)

  t.true(valid)
})

test('signature with fastify', t => {
  const safepay = new Safepay(config.production)

  const valid = safepay.verify.signature(requestSignatureFastify)

  t.true(valid)
})

test('webhook with express', t => {
  const safepay = new Safepay(config.production)

  const valid = safepay.verify.webhook(requestWebhookExpress)

  t.true(valid)
})

test('webhook with fastify', t => {
  const safepay = new Safepay(config.production)

  const valid = safepay.verify.webhook(requestWebhookFastify)

  t.true(valid)
})
