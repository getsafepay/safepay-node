/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
export declare type HttpRequest = {
    body?: unknown;
    headers?: IncomingHttpHeaders;
};
