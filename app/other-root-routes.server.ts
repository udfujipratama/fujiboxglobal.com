import { generateRobotsTxt, generateSitemap } from '@balavishnuvj/remix-seo'
import { EntryContext } from "@remix-run/node";

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null

export const otherRootRoutes: Record<string, Handler> = {
  '/sitemap.xml': async (request, remixContext) => {
    return generateSitemap(request, remixContext, {
      siteUrl: 'https://fujiboxglobal.com',
    })
  },
  '/robots.txt': async () => {
    return generateRobotsTxt([
      { type: 'sitemap', value: 'https://fujiboxglobal.com/sitemap.xml' },
      { type:'userAgent', value: '*'},
      { type: 'allow', value: '/'},

    ])
  },
}

export const otherRootRouteHandlers: Array<Handler> = [
  ...Object.entries(otherRootRoutes).map(([path, handler]) => {
    return (request: Request, remixContext: EntryContext) => {
      if (new URL(request.url).pathname !== path) return null
      return handler(request, remixContext)
    }
  }),
]