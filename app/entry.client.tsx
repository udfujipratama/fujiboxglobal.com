import { hydrate } from 'react-dom'
import { RemixBrowser } from 'remix'

import { splitbee } from '~/lib'

hydrate(<RemixBrowser />, document)

splitbee.init()
