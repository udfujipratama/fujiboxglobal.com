import { renderToString } from 'react-dom/server'
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";

import { otherRootRouteHandlers } from './other-root-routes.server'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // eslint-disable-next-line no-restricted-syntax
  for (const handler of otherRootRouteHandlers) {
    // eslint-disable-next-line no-await-in-loop
    const otherRouteResponse = await handler(request, remixContext)
    if (otherRouteResponse) return otherRouteResponse
  }
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
