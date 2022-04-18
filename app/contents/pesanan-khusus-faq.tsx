import { Disclosure } from '@headlessui/react'
import { IoIosArrowDropdown } from 'react-icons/io'

import { faqPesananKhusus } from '~/data'

export const PesananKhususFAQ = () => {
  return (
    <div className="container p-2">
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-bold my-2 text-center">
          F.A.Q
        </h1>
        {faqPesananKhusus.map((faq) => {
          return (
            <Disclosure key={faq.title}>
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button className="flex justify-between bg-primary p-4 my-4 text-white w-80 rounded-lg">
                      <span>{faq.title}</span>
                      <IoIosArrowDropdown
                        className={`${
                          open ? 'transform rotate-90' : ''
                        } w-5 h-5`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="py-4 w-80">
                      {faq.description}
                    </Disclosure.Panel>
                  </>
                )
              }}
            </Disclosure>
          )
        })}
      </div>
    </div>
  )
}
