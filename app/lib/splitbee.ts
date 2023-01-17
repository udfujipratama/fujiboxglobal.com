import splitbee from '@splitbee/web'

splitbee.init()

// Track a custom event
splitbee.track('Click Tokopedia button')
splitbee.track('Click Tokopedia navbar')
splitbee.track('Click Shopee button')
splitbee.track('Click Shopee navbar')

export { splitbee }
