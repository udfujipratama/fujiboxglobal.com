import splitbee from '@splitbee/web'

splitbee.init()

// Track a custom event
splitbee.track('Click Tokopedia')
splitbee.track('Click Shopee')

export { splitbee }
