import { Checkout, Payments, Verify } from './resources';
import { SafepayOptions } from './types';
export declare class Safepay {
    private config;
    checkout: Checkout;
    payments: Payments;
    verify: Verify;
    constructor(options: SafepayOptions);
}
