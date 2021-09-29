import { PaymentsCreateData, PaymentsCreateParams, SafepayConfig } from '../types';
export declare class Payments {
    private config;
    constructor(config: SafepayConfig);
    create({ amount, currency }: PaymentsCreateParams): Promise<PaymentsCreateData>;
}
