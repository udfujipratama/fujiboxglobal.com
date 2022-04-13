import NProgress from 'nprogress'
import { useEffect } from 'react'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from 'remix'

import { Layout } from '~/components'

import type { MetaFunction } from 'remix'

import appStylesUrl from '~/styles/app.css'
import nProgressStylesUrl from '~/styles/nprogress.css'

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
    title: 'Fujibox',
    description: 'Crafting a good Packaging Product',
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;600;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: appStylesUrl,
    },
    {
      rel: 'stylesheet',
      href: nProgressStylesUrl,
    },
  ]
}

export default function App() {
  const transition = useTransition()

  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === 'idle') NProgress.done()
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start()
  }, [transition.state])

  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// export function ErrorBoundary({ error }: { error: Error }) {
//   return (
//     <div>
//       <h1>Error</h1>
//       <p>{error.message}</p>
//       <p>The stack trace is:</p>
//       <pre>{error.stack}</pre>
//     </div>
//   )
// }
