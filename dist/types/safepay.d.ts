export declare type SafepayEnvironment = 'sandbox' | 'production';
export declare type SafepayCurrency = 'PKR' | 'USD';
export declare type SafepayOptions = {
    environment: SafepayEnvironment;
    key: string;
    secret: string;
    url?: string;
};
export declare type SafepayConfig = {
    environment: SafepayEnvironment;
    key: string;
    secret: string;
    url: string;
};
