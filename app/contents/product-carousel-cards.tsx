import { FunctionComponent } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Link, useLocation } from 'remix'

import type { Product, Products } from '~/types'

interface ProductCarouselCardsProps {
  route: string
  products: Products
}

const TransfromArray = (products: any) => {
  const items = products.reduce((resultArray: any, item: any, index: any) => {
    const chunkIndex = Math.floor(index / 6)

    if (!resultArray[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      resultArray[chunkIndex] = []
    }

    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
  return items
}

export const ProductCarouselCards: FunctionComponent<
  ProductCarouselCardsProps
> = ({ route, products }) => {
  const AllProducts = TransfromArray(products)
  const location = useLocation()
  const numSlide = Number(location.hash.slice(-1))

  const prevSlide = `#slide${numSlide - 1}`
  const nextSlide = `#slide${numSlide + 1}`
  const totalSlide = AllProducts.length - 1

  const canPrevSlide = numSlide > 0
  const canNextSlide = numSlide < totalSlide

  return (
    <div className="relative">
      {canPrevSlide && (
        <div className="hidden md:absolute top-1/3 -left-10 z-10">
          <Link to={prevSlide} className="btn btn-circle btn-primary">
            <HiChevronLeft />
          </Link>
        </div>
      )}
      <div className="carousel p-4">
        {AllProducts.map((Products: any[], index: any) => {
          return (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item gap-2 md:justify-around"
            >
              {Products.map((item) => {
                return (
                  <CardItem key={item.id || index} route={route} item={item} />
                )
              })}
            </div>
          )
        })}
        {canNextSlide && (
          <div className="hidden md:absolute top-1/3 -right-10 z-10">
            <Link to={nextSlide} className="btn btn-circle btn-primary">
              <HiChevronRight />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

interface CardItemsProps {
  route: string
  item: Product
}

const CardItem: FunctionComponent<CardItemsProps> = ({ route, item }) => {
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

  const LinkLihatProduk =
    route === 'kategori'
      ? `/${route}/${item.slug}`
      : `/${route}/${item.slug}/${item.categories[0].slug}`

  return (
    <div className="card card-compact bg-base-100 shadow-xl w-52">
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
