'use strict'

const axios = require('axios');
const nodeify = require('./utils/nodeify')

function normalizeError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw {
      statusCode: error.response.status,
      error: error.response.data.status.errors.join(" ")
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw {
      statusCode: 500,
      error: error.request
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    throw {
      statusCode: 500,
      error: error.message
    }
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