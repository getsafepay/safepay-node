'use strict'

const Api = require('./api')
const pkg = require('../package.json')
const {
  validateWebhookSignature,
} = require('./utils/safepay-utils');

class Safepay {
  static VERSION = pkg.version

  static validateWebhookSignature (...args) {
    return validateWebhookSignature(...args);
  }

  constructor(options = {}) {

    try {
      this.validate(options);
    } catch (err) {
      throw err;
    }

    this.api = this.createClient(options)
    this.addResources()
  }

  createClient({
    environment,
    sandbox,
    production
  }) {

    if (environment === "sandbox") {
      return new Api({
        environment,
        baseUrl: sandbox.baseUrl,
        apiKey: sandbox.apiKey,
        apiSecret: sandbox.apiSecret,
      })
    }

    return new Api({
      environment,
      baseUrl: production.baseUrl,
      apiKey: production.apiKey,
      apiSecret: production.apiSecret,
    })
  }

  validate({
    environment,
    sandbox,
    production
  }) {

    let empty
    switch (environment) {
      case "sandbox":
      empty = this.empty(sandbox)
      break
      case "production":
      empty = this.empty(production)
      break
      default:
      throw new Error('invalid environment')
    }

    if (empty) {
      throw new Error(`api keys for ${environment} are missing`)
    }
  }

  empty(options = {}) {
    return Object.keys(options).every(o => {
      return !options[o]
    })
  }

  addResources() {
    Object.assign(this, {
       payments: require('./resources/payments')(this.api),
       checkout: require('./resources/checkout')(this.api),
    })
  }
}

module.exports = Safepay