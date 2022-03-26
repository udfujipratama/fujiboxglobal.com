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
              className="carousel-item w-full max-w-[500px] border-solid border-2 border-gray"
            >
              <img
                src={productImage.url}
                className="w-full max-w-[500px]"
                alt={`Gambar produk ${index + 1}`}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  )
}
