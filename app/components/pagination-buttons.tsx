import { FunctionComponent } from 'react'
import { Link, useSearchParams } from 'remix'
import queryString from 'query-string'

interface PaginationButtonsProps {
  productsConnection: any
}

export const PaginationButtons: FunctionComponent<PaginationButtonsProps> = ({
  productsConnection,
}) => {
  const [searchParams] = useSearchParams()
  const { count } = productsConnection?.aggregate
  const itemsPerPage = 10

  const searchQuery = searchParams.get('q') || undefined
  const pageQuery: number = Number(searchParams.get('page')) || 1
  const pagesQuantity: number = Math.ceil(count / itemsPerPage)
  const pagesArray: number[] = Array.from(
    { length: pagesQuantity },
    (_, i) => i + 1
  )

  const canPrevious = pageQuery > 1
  const canNext = pageQuery < pagesQuantity

  const previousPageLink = queryString.stringify({
    page: pageQuery - 1,
    q: searchQuery,
  })
  const nextPageLink = queryString.stringify({
    page: pageQuery + 1,
    q: searchQuery,
  })

  return (
    <div className="flex justify-center mt-10">
      <div className="btn-group">
        {canPrevious && (
          <Link to={'?' + previousPageLink} className="btn btn-sm">
            «
          </Link>
        )}
        {pagesArray.map((pageNumber) => {
          const isActive = pageQuery === pageNumber
          return (
            <Link
              key={pageNumber}
              to={`?page=${pageNumber}`}
              className={`btn btn-sm ${isActive && 'btn-active'}`}
            >
              {pageNumber}
            </Link>
          )
        })}
        {canNext && (
          <Link to={'?' + nextPageLink} className="btn btn-sm">
            »
          </Link>
        )}
      </div>
    </div>
  )
}
