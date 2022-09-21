import crypto from 'crypto'
import { IncomingHttpHeaders } from 'http'

import { HttpRequest, SafepayConfig } from '../types'

export class Verify {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  signature(request: HttpRequest): boolean {
    const { sig, tracker } = request.body as Record<string, never>

    return (
      sig ===
      crypto
        .createHmac('sha256', this.config.v1Secret)
        .update(tracker)
        .digest('hex')
    )
  }

  webhook(request: HttpRequest): boolean {
    const data = Buffer.from(JSON.stringify(request.body.data))

    const signature = (request.headers as IncomingHttpHeaders)[
      'x-sfpy-signature'
    ]

    return (
      signature ===
      crypto
        .createHmac('sha512', this.config.webhookSecret)
        .update(data)
        .digest('hex')
    )
  }
}
