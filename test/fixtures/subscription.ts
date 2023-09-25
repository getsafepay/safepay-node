import { SubscriptionProps } from '../../src/types'

export enum SubscriptionPauseBehavior {
  UnspecifiedCollectionbBehavior = 'UNSPECIFIED_PAYMENT_COLLECTION_BEHAVIOR',
  KeepAsReady = 'KEEP_AS_READY',
  MarkUncollectible = 'MARK_UNCOLLECTIBLE',
  MarkVoid = 'MARK_VOID',
  Unrecgonized = 'UNRECOGNIZED'
}
