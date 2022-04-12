import queryString from 'query-string'
import { FunctionComponent } from 'react'
import { Link, useLocation, useSearchParams } from 'remix'

import type { Connection } from '~/types'

interface PaginationButtonsProps {
  productsConnection: Connection
}

export const PaginationButtons: FunctionComponent<PaginationButtonsProps> = ({
  productsConnection,
}) => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { count } = productsConnection?.aggregate || 0
  const itemsPerPage = 10

  const searchQuery = searchParams.get('q') || undefined
  const pageQuery: number = Number(searchParams.get('page')) || 1
  const categoryQuery = searchParams.get('kategori') || undefined
  const collectionQuery = searchParams.get('koleksi') || undefined

  const pagesQuantity: number = Math.ceil(count / itemsPerPage)
  const pagesArray: number[] = Array.from({ length: pagesQuantity }, (_, i) => {
    return i + 1
  })

  const canPrevious = pageQuery > 1
  const canNext = pageQuery < pagesQuantity

  const previousPageLink = queryString.stringify({
    page: pageQuery - 1,
    q: searchQuery,
    kategori: categoryQuery,
    koleksi: collectionQuery,
  })

  const nextPageLink = queryString.stringify({
    page: pageQuery + 1,
    q: searchQuery,
    kategori: categoryQuery,
    koleksi: collectionQuery,
  })

  if (location.pathname !== '/produk') {
    return null
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="btn-group">
        {canPrevious && (
          <Link to={`?${previousPageLink}`} className="btn btn-sm">
            «
          </Link>
        )}
        {pagesArray.map((pageNumber) => {
          const isActive = pageQuery === pageNumber
          const pageLink = queryString.stringify({
            page: pageNumber,
            q: searchQuery,
            kategori: categoryQuery,
            koleksi: collectionQuery,
          })

          return (
            <Link
              key={pageNumber}
              to={`?${pageLink}`}
              className={`btn btn-sm ${isActive && 'btn-active'}`}
            >
              {pageNumber}
            </Link>
          )
        })}
        {canNext && (
          <Link to={`?${nextPageLink}`} className="btn btn-sm">
            »
          </Link>
        )}
      </div>
    </div>
  )
}
