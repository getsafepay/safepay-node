import { IncomingHttpHeaders } from 'http'

export type HttpRequest = {
  body?: any
  headers?: IncomingHttpHeaders
}
