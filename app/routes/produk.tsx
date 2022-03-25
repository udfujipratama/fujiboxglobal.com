import { json, Link, LoaderFunction, useLoaderData } from 'remix'
import { gql } from '@urql/core'
import { CardsList } from '~/components'
import { graphcmsClient } from '~/lib'

export const loader: LoaderFunction = async () => {
  const allProductsCategoriesCollectionsQuery = gql`
    query AllProductsCategoriesCollections {
      products {
        id
        slug
        name
        description
        width
        height
        length
        images {
          url
        }
      }
      categories {
        id
        slug
        name
      }
      collections {
        id
        slug
        name
      }
    }
  `

  const response = await graphcmsClient
    .query(allProductsCategoriesCollectionsQuery)
    .toPromise()
  const { products, categories, collections } = response.data

  return json({
    products,
    categories,
    collections,
  })
}

export default function Products() {
  const { products, categories, collections } = useLoaderData()

  return (
    <>
      <div className="container my-14">
        <nav className="text-base breadcrumbs mb-5">
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/produk">Produk</Link>
            </li>
          </ul>
        </nav>

        <div id="sidebar-items" className="flex flex-col xl:flex-row">
          <aside id="sidebar" className="flex flex-col min-w-[250px] gap-10">
            <div id="sidebar-categories">
              <h4 className="font-bold mb-4 underline underline-offset-8">
                Kategori
              </h4>
              <ul>
                {categories.map((category: any) => (
                  <Link
                    key={category.id}
                    to={`/kategori/${category.slug}`}
                    className="link link-hover"
                  >
                    <li>{category.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div id="sidebar-collections">
              <h4 className="font-bold mb-4 underline underline-offset-8">
                Koleksi
              </h4>
              <ul>
                {collections.map((collection: any) => (
                  <Link
                    key={collection.id}
                    to={`/koleksi/${collection.slug}`}
                    className="link link-hover"
                  >
                    <li>{collection.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </aside>

          <div id="items-pagination">
            <CardsList route="produk" items={products} />
            <div className="flex justify-center mt-10">
              <div className="btn-group">
                <button className="btn btn-sm">«</button>
                <button className="btn btn-sm btn-active">1</button>
                <button className="btn btn-sm">2</button>
                <button className="btn btn-sm">3</button>
                <button className="btn btn-sm">4</button>
                <button className="btn btn-sm">»</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
