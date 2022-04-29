import { useState, useRef, useEffect, FunctionComponent } from 'react'
import { Link } from 'remix'

import { Product, Products } from '~/types'

interface ProductCarouselCardsProps {
  route: string
  products: Products
}

export const ProductCarouselCards: FunctionComponent<
  ProductCarouselCardsProps
> = ({ route, products }) => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLHeadingElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => {
        return prevState - 1
      })
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => {
        return prevState + 1
      })
    }
  }

  const isDisabled = (direction: any) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])
  // @ts-ignore

  return (
    <div className="container my-2 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            type="button"
            onClick={movePrev}
            className="xs:hidden lg:hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            type="button"
            onClick={moveNext}
            className="xs:hidden lg:hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="container flex gap-8 p-4 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {products.map((item, index) => {
            return <CardItem key={item.id || index} item={item} />
          })}
        </div>
      </div>
    </div>
  )
}

interface CardItemsProps {
  item: Product
}

const CardItem: FunctionComponent<CardItemsProps> = ({ item }) => {
  const itemImageUrl =
    item.images[0]?.url ||
    item.categories[0].image.url ||
    item.collections[0].image.url ||
    ''

  const hasCategory = Boolean(
    item.categories?.length && item.categories[0]?.name
  )

  const LinkClassname = item.soldOut
    ? 'btn btn-disabled btn-sm text-xs'
    : 'btn btn-primary btn-sm text-xs'

  const LinkName = item.soldOut ? 'SOLD OUT' : 'Lihat Produk'

  const LinkLihatProduk = `/produk/${item.slug}/${item.categories[0].slug}`

  return (
    <div className="card card-compact shrink-0 bg-base-100 shadow-xl w-48 lg:w-1/5">
      {itemImageUrl && (
        <figure>
          <img src={itemImageUrl} alt={item.name} />
        </figure>
      )}
      <div className="card-body">
        {hasCategory && (
          <span className="text-[10px] text-slate-400">
            {item.categories[0]?.name}
          </span>
        )}

        <h2 className="card-title text-xs">{item.name}</h2>
        <Link className={LinkClassname} to={LinkLihatProduk}>
          {LinkName}
        </Link>
      </div>
    </div>
  )
}
