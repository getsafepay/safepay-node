"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safepay = void 0;
var resources_1 = require("./resources");
var utils_1 = require("./utils");
var Safepay = /** @class */ (function () {
    function Safepay(options) {
        var _a;
        (0, utils_1.validateOptions)(options);
        this.config = {
            environment: options.environment,
            key: options.key,
            secret: options.secret,
            url: ((_a = options.url) !== null && _a !== void 0 ? _a : options.environment === 'production')
                ? utils_1.API_URL_PRODUCTION
                : utils_1.API_URL_SANDBOX
        };
        this.checkout = new resources_1.Checkout(this.config);
        this.payments = new resources_1.Payments(this.config);
        this.verify = new resources_1.Verify(this.config);
    }
    return Safepay;
}());
exports.Safepay = Safepay;
