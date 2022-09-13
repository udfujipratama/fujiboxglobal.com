import { FunctionComponent } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from "@remix-run/react";

import { ProductImagesCarousel } from '~/components'
import { RecommendedProducts } from '~/contents'

import type { Category, Collection, Product, Products } from '~/types'

interface ProductDetailProps {
  product: Product
  products: Products
}

export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
  product,
  products,
}) => {
  const descriptionHtml = product?.description?.html

  const LinkClassname = product.soldOut
    ? 'btn btn-block btn-disabled gap-4'
    : 'btn btn-block gap-4 bg-whatsapp hover:bg-whatsapp'

  const LinkName = product.soldOut ? 'SOLD OUT' : 'Ingin produk ini'
  return (
    <>
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          <ProductImagesCarousel productImages={product.images} />

          <div className="w-full max-w-[500px]">
            <nav className="text-sm breadcrumbs overflow-x-hidden text-slate-400">
              <ul>
                <li>
                  <Link to="/">Beranda</Link>
                </li>
                <li>
                  <Link to="/produk">Produk</Link>
                </li>
                <li>
                  <Link to={`/produk/${product.slug}`}>{product.name}</Link>
                </li>
              </ul>
            </nav>
            <h1 className="text-2xl lg:text-3xl mb-4">{product.name}</h1>
            <div className="grid grid-cols-[60px_1fr] gap-4 border-solid border-2 border-gray p-4">
              <div>Bahan:</div>
              <div>{product.material}</div>
              <div>Panjang:</div>
              <div>{product.length} cm</div>
              <div>Lebar: </div>
              <div>{product.width} cm </div>
              <div>Tinggi: </div>
              <div>{product.height} cm</div>
              <div>Kategori:</div>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((category: Category) => {
                  return (
                    <Link
                      key={category.id}
                      to={`/produk?kategori=${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  )
                })}
              </div>
              <div>Koleksi:</div>
              <div className="flex flex-wrap gap-2">
                {product.collections.map((collection: Collection) => {
                  return (
                    <Link
                      key={collection.id}
                      to={`/produk?koleksi=${collection.slug}`}
                    >
                      {collection.name}
                    </Link>
                  )
                })}
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-2xl mb-4">Deskripsi</h2>

              {descriptionHtml && (
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: descriptionHtml,
                  }}
                />
              )}
            </div>
            <div>
              <a
                href={`https://wa.me/6281291071355?text=Halo%20saya%20ingin%20tanya%20tentang%20produk%20${product.name}%0A%0Ahttps%3A%2F%2Ffujiboxglobal.com%2Fproduk%2F${product.slug}%2F${product.categories[0].slug}`}
                className={LinkClassname}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-lg">{LinkName}</span>
                <span className="text-2xl">
                  <IoLogoWhatsapp />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts products={products} />
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </>
  )
}
