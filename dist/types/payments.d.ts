import { SafepayCurrency } from './safepay';
export declare type PaymentsCreateParams = {
    amount: number;
    currency: SafepayCurrency;
};
export declare type PaymentsCreateData = {
    token: string;
};
