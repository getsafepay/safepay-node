'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');
var nodeify = require('./utils/nodeify');

function normalizeError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw {
      statusCode: error.response.status,
      error: error.response.data.status.errors.join(" ")
    };
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw {
      statusCode: 500,
      error: error.request
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    throw {
      statusCode: 500,
      error: error.message
    };
  }
}

var Api = function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this.environment = options.environment, this.apiKey = options.apiKey;
    this.apiSecret = options.apiSecret;

    this.rq = axios.create({
      baseURL: options.baseUrl
    });
  }

  _createClass(Api, [{
    key: 'get',
    value: function get(params, cb) {
      return nodeify(this.rq({
        method: "get",
        url: params.url,
        params: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'post',
    value: function post(params, cb) {
      return nodeify(this.rq({
        method: "post",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'put',
    value: function put(params, cb) {
      return nodeify(this.rq({
        method: "put",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'patch',
    value: function patch(params, cb) {
      return nodeify(this.rq({
        method: "patch",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }, {
    key: 'delete',
    value: function _delete(params, cb) {
      return nodeify(this.rq({
        method: "delete",
        url: params.url,
        data: params.data
      }).catch(normalizeError), cb);
    }
  }]);

  return Api;
}();

module.exports = Api;