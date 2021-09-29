export declare type CheckoutCreateParams = {
    cancelUrl: string;
    orderId: string;
    redirectUrl: string;
    source?: 'custom';
    token: string;
    webhooks?: boolean;
};
export declare type CheckoutCreateData = string;
