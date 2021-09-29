export type SafepayEnvironment = 'sandbox' | 'production'

export type SafepayCurrency = 'PKR' | 'USD'

export type SafepayOptions = {
  environment: SafepayEnvironment
  key: string
  secret: string
  url?: string
}

export type SafepayConfig = {
  environment: SafepayEnvironment
  key: string
  secret: string
  url: string
}
