import { SafepayCurrency } from './safepay'

export type PaymentsCreateParams = {
  amount: number
  currency: SafepayCurrency
}

export type PaymentsCreateData = {
  token: string
}
