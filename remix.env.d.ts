/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node/globals" />

declare global {
  const ENV: any
  interface Window {
    ENV: any
  }
}

export default global
