import { SafepayConfig, SafepayEnvironment, SafepayOptions } from '../types'
import { Channel, Environment } from './constants'

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

  if (
    options.channel === Channel.Cards &&
    options.environment === Environment.Production
  ) {
    throw new Error('Cards can only be used on sandbox or development for now')
  }

  return true
}

const validateEnvironment = (
  environment: string
): environment is SafepayEnvironment =>
  ['sandbox', 'production', 'development'].includes(environment)
