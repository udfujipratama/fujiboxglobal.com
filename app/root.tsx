import { json, LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import NProgress from 'nprogress'
import { useEffect } from 'react'

import { Layout, NotFoundPage } from '~/components'

import type { MetaFunction } from "@remix-run/node";




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

export const loader: LoaderFunction = async () => {
  return json({
    ENV: { NODE_ENV: process.env.NODE_ENV },
  })
}

export default function App() {
  const data = useLoaderData()
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
        {data?.ENV && (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data?.ENV)};`,
            }}
          />
        )}
      </body>
    </html>
  )
}

export function CatchBoundary() {
  return (
    <html lang="id">
      <head>
        <title>halaman tidak ditemukan</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <NotFoundPage />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
