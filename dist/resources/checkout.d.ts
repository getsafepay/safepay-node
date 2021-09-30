import { CheckoutCreateData, CheckoutCreateParams, SafepayConfig } from '../types';
export declare class Checkout {
    private config;
    constructor(config: SafepayConfig);
    create({ cancelUrl, orderId, redirectUrl, source, token, webhooks }: CheckoutCreateParams): CheckoutCreateData;
}
