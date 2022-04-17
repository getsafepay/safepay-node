import { Environment } from '../utils'

export type SafepayEnvironment = Environment.Sandbox | Environment.Production

export type SafepayCurrency = 'PKR' | 'USD'

export type SafepayOptions = {
  environment: SafepayEnvironment
  apiKey: string
  v1Secret: string
  webhookSecret: string
}

export type SafepayConfig = {
  environment: SafepayEnvironment
  apiKey: string
  v1Secret: string
  webhookSecret: string
}
