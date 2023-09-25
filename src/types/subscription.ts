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

export interface Client {
  token: string
  name: string
  description: string
  email: string
  phone: string
  api_key: string
  avatar: string
  website: string
  payout_terms: string
  active: number
  suspended: number
  suspended_reason: string
  verified: number
  created_at: string
  updated_at: string
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

export interface Subscription {
  token: string
  planId: string
  userId: string
  user?: User | undefined
  merchant?: Client | undefined
  instrument_id: string
  status: SubscriptionStatus
  billingCycleAnchor: Date | undefined
  priceAmount: string
  priceCurrency: string
  balance: string
  startDate?: Date | undefined
  endDate?: Date | undefined
  trialStartDate?: Date | undefined
  trialEndDate?: Date | undefined
  cancelAtPeriodEnd: boolean
  canceledAt?: Date | undefined
  createdAt: Date | undefined
  updatedAt: Date | undefined
  plan?: Plan | undefined
  currentPeriodStartDate?: Date | undefined
  currentPeriodEndDate?: Date | undefined
  lastPaidDate?: Date | undefined
  currentBillingCycle?: number | undefined
  pausedAt?: Date | undefined
  resumedAt?: Date | undefined
  neverExpires: boolean
  numberOfBillingCycles?: number | undefined
  merchantApiKey: string
}

export interface User {
  token: string
  first_name: string
  last_name: string
  email: string
  phone: string
  verified: number
  addresses: UserAddress[]
  contacts: UserContact[]
  wallet: CardPaymentMethodResponseProps[]
  created_at: string
  updated_at: string
}

export interface CardPaymentMethodResponseProps {
  request_id: string
  token: string
  bin_number: string
  instrument_type: string
  expiry_month: string
  expiry_year: string
  payment_method_token: string
  last_4: string
  created_at: string
  updated_at: string
}

export interface UserContact {
  token: string
  user: string
  first_name: string
  last_name: string
  email: string
  phone: string
  is_default: boolean
  updated_at: DateTime
  created_at: DateTime
}

export interface UserAddress {
  token: string
  owner: string
  street1: string
  street2: string
  city: string
  state: string
  postal_code: string
  country: string
  is_default: boolean
  updated_at: DateTime
  created_at: DateTime
}
