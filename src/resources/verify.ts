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
        .createHmac('sha256', this.config.secret)
        .update(tracker)
        .digest('hex')
    )
  }

  webhook(secret: string, request: HttpRequest): boolean {
    const data = Buffer.from(JSON.stringify(request.body))

    const signature = (request.headers as IncomingHttpHeaders)[
      'X-SFPY-Signature'
    ]

    return (
      signature ===
      crypto.createHmac('sha512', secret).update(data).digest('hex')
    )
  }
}
