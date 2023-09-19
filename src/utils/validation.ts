import {
  SafepayConfig,
  SafepayConfigSubscriptions,
  SafepayEnvironment,
  SafepayOptions,
  SafepayOptionsSubscriptions
} from '../types'

export const validateOptions = (
  options: SafepayOptions
): options is SafepayConfig => {
  if (!options.environment) {
    throw new Error('Environment is missing')
  }

  if (!validateEnvironment(options.environment)) {
    throw new Error('Environment is invalid')
  }

  if (!options.apiKey) {
    throw new Error(`API key is missing for ${options.environment}`)
  }

  if (!options.v1Secret) {
    throw new Error(`v1 secret key is missing for ${options.environment}`)
  }

  if (!options.webhookSecret) {
    throw new Error(`Webhook secret is missing for ${options.environment}`)
  }

  return true
}

export const validateOptionsForSubscriptions = (
  options: SafepayOptionsSubscriptions
): options is SafepayConfigSubscriptions => {
  if (!options.environment) {
    throw new Error('Environment is missing')
  }

  if (!validateEnvironment(options.environment)) {
    throw new Error('Environment is invalid')
  }

  if (!options.v1Secret) {
    throw new Error(`v1 secret key is missing for ${options.environment}`)
  }

  return true
}

const validateEnvironment = (
  environment: string
): environment is SafepayEnvironment =>
  ['sandbox', 'production', 'development'].includes(environment)
