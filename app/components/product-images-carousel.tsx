import { FunctionComponent } from 'react'

interface ProductImagesCarouselProps {
  productImages: any[]
}

export const ProductImagesCarousel: FunctionComponent<
  ProductImagesCarouselProps
> = ({ productImages }) => {
  return (
    <div>
      <div className="carousel w-full max-w-[500px]">
        {productImages.map((productImage, index) => {
          return (
            <div
              key={productImage.id}
              id={`item${index + 1}`}
              className="carousel-item w-full max-w-[500px]"
            >
              <img
                src={productImage.url}
                className="object-cover w-full max-w-[500px] border-solid border-2 border-gray"
                alt={`Gambar produk ${index + 1}`}
              />
            </div>
          )
        })}
      </div>
      <div className="flex  w-full py-2 justify-around">
        {productImages.map((productImage, index) => {
          return (
            <a key={productImage.id} href={`#item${index + 1}`}>
              <img
                src={productImage.url}
                className="object-cover h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] border-solid border-2 border-gray"
                alt={`Gambar produk ${index + 1}`}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}
