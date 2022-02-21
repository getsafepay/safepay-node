import { SafepayEnvironment, SafepayOptions } from '../../src/types'
import { API_URL_PRODUCTION, API_URL_SANDBOX } from '../../src/utils'

export const config: Record<SafepayEnvironment, SafepayOptions> = {
  production: {
    environment: 'production',
    key: 'sec_00000000-0000-0000-0000-000000000000',
    secret: 'bar'
  },
  sandbox: {
    environment: 'sandbox',
    key: 'sec_00000000-0000-0000-0000-000000000000',
    secret: 'bar'
  }
}

export const configWithUrl: Record<SafepayEnvironment, SafepayOptions> = {
  production: {
    environment: 'production',
    key: 'sec_00000000-0000-0000-0000-000000000000',
    secret: 'bar',
    url: API_URL_PRODUCTION
  },
  sandbox: {
    environment: 'sandbox',
    key: 'sec_00000000-0000-0000-0000-000000000000',
    secret: 'bar',
    url: API_URL_SANDBOX
  }
}
