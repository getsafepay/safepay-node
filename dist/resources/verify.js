"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verify = void 0;
var crypto_1 = __importDefault(require("crypto"));
var Verify = /** @class */ (function () {
    function Verify(config) {
        this.config = config;
    }
    Verify.prototype.signature = function (request) {
        var _a = request.body, sig = _a.sig, tracker = _a.tracker;
        return (sig ===
            crypto_1.default
                .createHmac('sha256', this.config.secret)
                .update(tracker)
                .digest('hex'));
    };
    Verify.prototype.webhook = function (secret, request) {
        var data = Buffer.from(JSON.stringify(request.body));
        var signature = request.headers['X-SFPY-Signature'];
        return (signature ===
            crypto_1.default.createHmac('sha512', secret).update(data).digest('hex'));
    };
    return Verify;
}());
exports.Verify = Verify;
