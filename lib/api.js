'use strict'

const axios = require('axios');
const nodeify = require('./utils/nodeify')

function normalizeError(err) {
  throw {
    statusCode: err.statusCode,
    error: err.error.error
  }
}

class Api {
  constructor(options) {
    this.environment = options.environment,
    this.apiKey = options.apiKey
    this.apiSecret = options.apiSecret

    this.rq = axios.create({
      baseURL: options.baseUrl
    })
  }

  get(params, cb) {
    return nodeify(this.rq({
      method: "get",
      url: params.url,
      params: params.data,
    }).catch(normalizeError), cb)
  }

  post(params, cb) {
    return nodeify(this.rq({
      method: "post",
      url: params.url,
      data: params.data
    }).catch(normalizeError), cb)
  }

  put(params, cb) {
    return nodeify(this.rq({
      method: "put",
      url: params.url,
      data: params.data
    }).catch(normalizeError), cb)
  }

  patch(params, cb) {
    return nodeify(this.rq({
      method: "patch",
      url: params.url,
      data: params.data
    }).catch(normalizeError), cb)
  }

  delete(params, cb) {
    return nodeify(this.rq({
      method: "delete",
      url: params.url,
      data: params.data
    }).catch(normalizeError), cb)
  }
}

module.exports = Api