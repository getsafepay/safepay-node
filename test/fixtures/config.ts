import { SafepayEnvironment, SafepayOptions } from '../../src/types'
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
  }
}
