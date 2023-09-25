export const API_URL_PRODUCTION = 'https://api.getsafepay.com'
export const API_URL_SANDBOX = 'https://sandbox.api.getsafepay.com'
export const API_URL_DEVELOPMENT = 'https://dev.api.getsafepay.com'

export const CHECKOUT_PRODUCTION = 'https://getsafepay.com/checkout/pay'
export const CHECKOUT_SANDBOX =
  'https://sandbox.api.getsafepay.com/checkout/pay'
export const CHECKOUT_DEVELOPMENT =
  'https://dev.api.getsafepay.com/checkout/pay'

export const SUBSCRIPTION_PRODUCTION =
  'https://getsafepay.com/checkout/subscribe'
export const SUBSCRIPTION_SANDBOX =
  'https://sandbox.api.getsafepay.com/checkout/subscribe'
export const SUBSCRIPTION_DEVELOPMENT =
  'https://dev.api.getsafepay.com/checkout/subscribe'

export enum Environment {
  Production = 'production',
  Sandbox = 'sandbox',
  Development = 'development'
}

export const SECRET_KEY_LOCAL =
  'd23c27c21ee6815d49110ee195b965a57b1ae9a94135a15bb446f6aab499bfdc'

export const SECRET_KEY_DEVELOPMENT =
  'b2fdcf2a147ca808a08fddc7ee5145163f07db62d88d8834733164b819dce73d'

export const SECRET_KEY_SANDBOX =
  'd928d9b1d9e487957c6658be637621bbb104d64b6b436e86714c2ff3712bd825'

export const PLAN_ID = 'plan_d4951867-58f3-4f09-8a42-e7f738593a73'

export const SUBSCRIPTION_ID = 'sub_84547221-89c9-4e94-807f-e326a736f1f5'

export const CANCEL_URL = 'https://www.google.com/'

export const REDIRECT_URL = 'https://www.google.com/'

export enum SubscriptionPauseBehavior {
  UnspecifiedCollectionbBehavior = 'UNSPECIFIED_PAYMENT_COLLECTION_BEHAVIOR',
  KeepAsReady = 'KEEP_AS_READY',
  MarkUncollectible = 'MARK_UNCOLLECTIBLE',
  MarkVoid = 'MARK_VOID',
  Unrecgonized = 'UNRECOGNIZED'
}
