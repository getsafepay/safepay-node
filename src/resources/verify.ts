import crypto from 'crypto'

import { SafepayConfig } from '../types'

export class Verify {
  private config: SafepayConfig

  constructor(config: SafepayConfig) {
    this.config = config
  }

  signature(token: string, signature: string): boolean {
    const expected = crypto
      .createHmac('sha256', this.config.secret)
      .update(token)
      .digest('hex')

    return expected === signature
  }

  // TODO
  webhook(): boolean {
    return false
  }
}
