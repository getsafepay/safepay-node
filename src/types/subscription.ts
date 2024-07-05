import { DateTime } from 'luxon'

enum SubscriptionStatus {
  NoSubscriptionStatus = 'NONE_SUBSCRIPTION_STATUS',
  Active = 'ACTIVE',
  PastDue = 'PAST_DUE',
  Unpaid = 'UNPAID',
  Canceled = 'CANCELED',
  Incomplete = 'INCOMPLETE',
  Incomplete_Expired = 'INCOMPLETE_EXPIRED',
  Trailing = 'TRAILING',
  All = 'ALL',
  Ended = 'ENDED',
  Paused = 'PAUSED',
  Unrecognized = 'UNRECOGNIZED'
}

export enum PlanInterval {
  UnspecifiedInterval = 'UNSPECIFIED_INTERVAL',
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
  Minute = 'MINUTE_TEST_INTERVAL',
  Unrecognized = 'UNRECOGNIZED'
}

export enum PlanType {
  Unspecified = 'UNSPECIFIED',
  OneTime = 'ONE_TIME',
  Recurring = 'RECURRING',
  Unrecognized = 'UNRECOGNIZED'
}

export interface Plan {
  token: string
  merchant_api_key: string
  name: string
  amount: string
  currency: string
  interval_count: number
  interval: PlanInterval
  product: string
  type: PlanType
  trial_period_days: number
  description: string
  created_at: string | undefined
  updated_at: string | undefined
  active: boolean
  archived: boolean
  number_of_billing_cycles: number
  apply_amount_change_on_existing_subscriptions: boolean
}

export interface SubscriptionProps {
  token: string
  plan_id: string
  user_id: string
  instrument_id: string
  status: SubscriptionStatus
  billing_cycle_anchor: string | undefined
  price_amount: string
  price_currency: string
  balance: string
  start_date?: string | undefined
  end_date?: DateTime | undefined
  trial_start_date?: string | undefined
  trial_end_date?: string | undefined
  cancel_at_period_end: boolean
  canceled_at?: DateTime | undefined
  created_at: string | undefined
  updated_at: string | undefined
  plan: Plan | undefined
  current_period_start_date?: string | undefined
  current_period_end_date?: string | undefined
  last_paid_date?: DateTime | undefined
  current_billing_cycle?: number | undefined
  paused_at?: DateTime | undefined
  resumed_at?: DateTime | undefined
  never_expires: boolean
  number_of_billing_cycles?: number | undefined
  reference?: string | undefined
}
