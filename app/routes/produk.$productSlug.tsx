import { gql } from '@urql/core'
import { IoLogoWhatsapp } from 'react-icons/io'
import { json, Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { ProductImagesCarousel } from '~/components'
import { RecommendedProducts } from '~/contents'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug } = params
  const oneProductBySlugQuery = gql`
    query OneProductBySlug($slug: String!) {
      product(where: { slug: $slug }) {
        id
        name
        slug
        material
        height
        length
        width
        description {
          html
        }
        images {
          id
          url
        }
        categories {
          id
          name
          slug
        }
        collections {
          id
          name
          slug
        }
      }

      products(first: 5) {
        id
        slug
        name
        images {
          url
        }
        categories {
          name
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(oneProductBySlugQuery, { slug: productSlug })
    .toPromise()
  const { product, products } = response.data

  return json({ product, products })
}

export const meta: MetaFunction = () => {
  return {
    title: 'Semua produk Fujibox',
    description: 'Cari produk Fujibox yang Anda butuhkan di sini.',
    // 'og:image': product.images[0].url,
    // 'og:image:alt': '',
  }
}

export default function ProductSlug() {
  const { product, products } = useLoaderData()
  const descriptionHtml = product?.description?.html

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
                {product.categories.map((category: any) => {
                  return (
                    <Link key={category.id} to={`/kategori/${category.slug}`}>
                      {category.name}
                    </Link>
                  )
                })}
              </div>
              <div>Koleksi:</div>
              <div className="flex flex-wrap gap-2">
                {product.collections.map((collection: any) => {
                  return (
                    <Link
                      key={collection.id}
                      to={`/koleksi/${collection.slug}`}
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
                  dangerouslySetInnerHTML={{
                    __html: descriptionHtml,
                  }}
                />
              )}
            </div>
            <div>
              <a
                href={`https://wa.me/6281291071355?text=Halo%20saya%20ingin%20tanya%20tentang%20produk%20ini%0A%0Ahttps%3A%2F%2Ffujiboxglobal.com%2Fproduk%2F${product.slug}`}
                className="btn btn-block rounded-full gap-4 bg-whatsapp hover:bg-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-lg">Ingin produk ini</span>
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
