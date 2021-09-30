import { HttpRequest, SafepayConfig } from '../types';
export declare class Verify {
    private config;
    constructor(config: SafepayConfig);
    signature(request: HttpRequest): boolean;
    webhook(secret: string, request: HttpRequest): boolean;
}
