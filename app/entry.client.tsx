import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import { splitbee } from '~/lib'

hydrate(<RemixBrowser />, document)

export const isEnvProduction = ENV?.NODE_ENV === 'production'
export const isSameHostName = window.location.hostname === 'fujiboxglobal.com'
export const isProductionAllowed = isEnvProduction && isSameHostName

console.log({
  isEnvProduction,
  isSameHostName,
  isProductionAllowed,
  ENV,
})

if (isProductionAllowed) {
  splitbee.init()
}
