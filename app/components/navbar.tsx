export const Navbar = () => {
  const tokopedia = 'https://www.tokopedia.com/fujiboxglobal'
  const shopee = 'https://www.shopee.co.id/fujiboxglobal'
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto flex max-w-7xl items-center justify-between p-4"
    >
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-lg"
      >
        <img
          className="w-28 lg:w-40"
          src="/images/logo/fujiboxlogo.svg"
          alt="logofujibox"
        />
      </a>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li>
          <a
            href={tokopedia}
            data-splitbee-event="Click Tokopedia navbar"
            target="_BLANK"
            className="rounded-lg px-3 py-2 text-[#03ac0e]"
            rel="noreferrer"
          >
            {' '}
            Tokopedia{' '}
          </a>
        </li>

        <li>
          <a
            href={shopee}
            data-splitbee-event="Click Shopee navbar"
            target="_BLANK"
            className="rounded-lg px-3 py-2 text-[#ff6600]"
            rel="noreferrer"
          >
            {' '}
            Shopee{' '}
          </a>
        </li>
      </ul>
    </nav>
  )
}
