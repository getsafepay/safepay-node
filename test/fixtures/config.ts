import {
  SafepayEnvironment,
  SafepayOptions,
  SafepayOptionsSubscriptions
} from '../../src/types'
import {
  API_URL_PRODUCTION,
  API_URL_SANDBOX,
  Environment
} from '../../src/utils'

export const config: Record<SafepayEnvironment, SafepayOptions> = {
  production: {
    environment: Environment.Production,
    apiKey: 'sec_00000000-0000-0000-0000-000000000000',
    v1Secret: 'bar',
    webhookSecret: 'foo'
  },
  sandbox: {
    environment: Environment.Sandbox,
    apiKey: 'sec_00000000-0000-0000-0000-000000000000',
    v1Secret: 'bar',
    webhookSecret: 'foo'
  },
  development: {
    environment: Environment.Development,
    apiKey: 'sec_00000000-0000-0000-0000-000000000000',
    v1Secret: 'bar',
    webhookSecret: 'foo'
  }
}

export const configSubscriptions: Record<
  SafepayEnvironment,
  SafepayOptionsSubscriptions
> = {
  production: {
    environment: Environment.Production,
    v1Secret: 'bar'
  },
  sandbox: {
    environment: Environment.Sandbox,
    v1Secret: 'bar'
  },
  development: {
    environment: Environment.Development,
    v1Secret: 'bar'
  }
}
