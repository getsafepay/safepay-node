'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.validateOptions = void 0
var validateOptions = function (options) {
  if (!options.environment) {
    throw new Error('Environment is missing')
  }
  if (!validateEnvironment(options.environment)) {
    throw new Error('Environment is invalid')
  }
  if (!options.key) {
    throw new Error('API key is missing for ' + options.environment)
  }
  if (!options.secret) {
    throw new Error('API secret is missing for ' + options.environment)
  }
  return true
}
exports.validateOptions = validateOptions
var validateEnvironment = function (environment) {
  return ['sandbox', 'production'].includes(environment)
}
