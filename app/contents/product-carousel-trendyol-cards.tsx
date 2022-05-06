import { Carousel } from '@trendyol-js/react-carousel'
import { FunctionComponent, useEffect, useState } from 'react'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { Link } from 'remix'

import { Product, Products } from '~/types'

interface ProductCarouselTrendyCardsProps {
  products: Products
}

export const ProductCarouselTrendyCards: FunctionComponent<
  ProductCarouselTrendyCardsProps
> = ({ products }) => {
  const [show, setShow] = useState(5)
  const [slide, setSlide] = useState(5)
  const [arrow, setArrow] = useState(true)

  const leftArrowComponent = arrow ? (
    <button type="button" className="btn btn-primary btn-sm my-40 mr-2">
      <FaAngleLeft />
    </button>
  ) : null

  const rightArrowComponent = arrow ? (
    <button type="button" className="btn btn-primary btn-sm my-40 ml-2">
      <FaAngleRight />
    </button>
  ) : null

  // @ts-ignore
  useEffect(() => {
    if (window.screen.width < 400) {
      setShow(1.5)
      setSlide(2)
      setArrow(false)
    }
    return {
      show,
      slide,
      arrow,
    }
  }, [show, slide, arrow])

  return (
    <div className="container my-2 mx-auto">
      <Carousel
        show={show}
        slide={slide}
        swiping
        rightArrow={rightArrowComponent}
        leftArrow={leftArrowComponent}
      >
        {products.map((item, index) => {
          return <CardItem key={item.id || index} item={item} />
        })}
      </Carousel>
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
    <div className="card card-compact m-4 bg-base-100 shadow-xl hover:shadow-2xl">
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
