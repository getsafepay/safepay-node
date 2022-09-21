import type { Request } from 'express'
import type { FastifyRequest } from 'fastify'

export const signatureBody = {
  sig: '530fdbcf1bf498aff65e42faff0791c366b0794dbe2e7bc1681ba1837b0c7a25',
  tracker: '1234'
}

export const requestSignatureExpress: Partial<Request> = {
  body: signatureBody
}

export const requestSignatureFastify: Partial<FastifyRequest> = {
  body: signatureBody
}

export const WEBHOOK_SECRET_KEY = 'foo'

const webhookHeaders = {
  'x-sfpy-signature':
    'ba4c442df5067b679f55919ebc282cb113e376d5a5e5d9c6655647d734823da75a4371759f921bce40963cb90505ed1f8c0405cb78257fd605d259d452a1a7c7'
}

const webhookBody = {
  data: {
    client_id: 'sec_55ca6960-e2ea-4643-b0cf-7cd65a4d3112',
    created_at: '2021-09-29T12:00:40Z',
    endpoint: 'http://127.0.0.1:9000',
    notification: {
      amount: '150',
      currency: 'PKR',
      fee: '4.92',
      intent: 'PAYFAST',
      metadata: {
        order_id: 'XG102312',
        source: 'shopify'
      },
      net: '145.08',
      state: 'PAID',
      tracker: 'tracker_c5a5apsbcv41om3fg0u0',
      user: 'johndoe@gmail.com'
    },
    token: 'C5A5APSBCV41R2QF2MHG',
    type: 'payment:created',
    updated_at: '2021-09-29T12:00:40Z'
  }
}

export const requestWebhookExpress: Partial<Request> = {
  body: webhookBody,
  headers: webhookHeaders
}

export const requestWebhookFastify: Partial<FastifyRequest> = {
  body: webhookBody,
  headers: webhookHeaders
}
