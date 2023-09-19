import { Environment } from '../utils'

export type SafepayEnvironment =
  | Environment.Sandbox
  | Environment.Production
  | Environment.Development

export type SafepayCurrency =
  | 'PKR'
  | 'USD'
  | 'AED'
  | 'SAR'
  | 'CAD'
  | 'EUR'
  | 'GBP'

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

export type SafepayOptionsSubscriptions = {
  environment: SafepayEnvironment
  v1Secret: string
}
export type SafepayConfigSubscriptions = {
  environment: SafepayEnvironment
  v1Secret: string
}
