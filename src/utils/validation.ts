import { SafepayConfig, SafepayEnvironment, SafepayOptions } from '../types'

export const validateOptions = (
  options: SafepayOptions
): options is SafepayConfig => {
  if (!options.environment) {
    throw new Error('Environment is missing')
  }

  if (!validateEnvironment(options.environment)) {
    throw new Error('Environment is invalid')
  }

  if (!options.key) {
    throw new Error(`API key is missing for ${options.environment}`)
  }

  if (!options.secret) {
    throw new Error(`API secret is missing for ${options.environment}`)
  }

  return true
}

const validateEnvironment = (
  environment: string
): environment is SafepayEnvironment =>
  ['sandbox', 'production'].includes(environment)
