import { FunctionComponent } from 'react'

import {
  LunchBoxSeries,
  SnackBoxSeries,
  CorrugatedBoxSeries,
} from '~/components/pesanan-khusus'
import {
  PesananKhususLunchbox,
  PesananKhususSnackbox,
  PesananKhususCorrugatedBox,
} from '~/data'

interface PesananKhususPenawaranProps {}

const PesananKhususPenawaran: FunctionComponent<
  PesananKhususPenawaranProps
> = () => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-fujibox">
            Harga baru
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Penawaran kami
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Berikut kami sediakan beberapa pilihan untuk anda
        </p>
      </div>
      <div className="grid max-w-lg gap-6 row-gap-4 lg:max-w-screen-xl sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-xl sm:mx-auto">
        {PesananKhususLunchbox.map((item, index) => {
          return (
            <LunchBoxSeries
              key={index + item.title}
              title={item.title}
              size={item.size}
              price={item.price}
            />
          )
        })}

        {PesananKhususSnackbox.map((item, index) => {
          return (
            <SnackBoxSeries
              key={index + item.title}
              title={item.title}
              size={item.size}
              price={item.price}
            />
          )
        })}

        {PesananKhususCorrugatedBox.map((item, index) => {
          return (
            <CorrugatedBoxSeries
              key={index + item.title}
              title={item.title}
              size={item.size}
              price={item.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PesananKhususPenawaran
