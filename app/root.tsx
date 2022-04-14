import NProgress from 'nprogress'
import { useEffect } from 'react'
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
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
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
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

export function CatchBoundary() {
  const caught = useCatch()
  let message

  switch (caught.status) {
    case 401:
      message = (
        <div>
          <p>Sorry, you don't have access to this page</p>
        </div>
      )
      break
    case 404:
      message = (
        <div>
          <p>Sorry, this page doesn't exist.</p>
        </div>
      )
      break
    default:
      throw new Error(caught.data || caught.statusText)
  }
  return (
    <>
      {message}
      <p>
        <Link to="/" prefetch="intent">
          Mari kembali ke beranda
        </Link>
      </p>
    </>
  )
}
