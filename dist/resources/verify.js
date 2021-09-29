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
    Verify.prototype.signature = function (token, signature) {
        var expected = crypto_1.default
            .createHmac('sha256', this.config.secret)
            .update(token)
            .digest('hex');
        return expected === signature;
    };
    // TODO
    Verify.prototype.webhook = function () {
        return false;
    };
    return Verify;
}());
exports.Verify = Verify;
