import { IncomingHttpHeaders } from 'http'

export type HttpRequest = {
  body?: unknown
  headers?: IncomingHttpHeaders
}
