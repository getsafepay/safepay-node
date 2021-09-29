import { SafepayConfig } from '../types'
export declare class Verify {
  private config
  constructor(config: SafepayConfig)
  signature(token: string, signature: string): boolean
  webhook(): boolean
}
