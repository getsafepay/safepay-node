"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
var utils_1 = require("../utils");
var Checkout = /** @class */ (function () {
    function Checkout(config) {
        this.config = config;
    }
    Checkout.prototype.create = function (_a) {
        var cancelUrl = _a.cancelUrl, orderId = _a.orderId, redirectUrl = _a.redirectUrl, _b = _a.source, source = _b === void 0 ? 'custom' : _b, token = _a.token, _c = _a.webhooks, webhooks = _c === void 0 ? false : _c;
        var url = this.config.environment === 'production' ? utils_1.URL_PRODUCTION : utils_1.URL_SANDBOX;
        var params = new URLSearchParams({
            beacon: token,
            cancel_url: cancelUrl,
            env: this.config.environment,
            order_id: orderId,
            redirect_url: redirectUrl,
            source: source,
            webhooks: String(webhooks)
        }).toString();
        return url + "?" + params;
    };
    return Checkout;
}());
exports.Checkout = Checkout;
