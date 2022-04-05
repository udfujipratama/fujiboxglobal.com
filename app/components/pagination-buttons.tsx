import { FunctionComponent } from 'react'
import { Link, useSearchParams } from 'remix'

interface PaginationButtonsProps {
  productsConnection: any
}

export const PaginationButtons: FunctionComponent<PaginationButtonsProps> = ({
  productsConnection,
}) => {
  const [searchParams] = useSearchParams()
  const { count } = productsConnection?.aggregate
  const itemsPerPage = 10

  const currentPage: number = Number(searchParams.get('page')) || 1
  const pagesQuantity: number = Math.ceil(count / itemsPerPage)
  const pagesArray: number[] = Array.from(
    { length: pagesQuantity },
    (_, i) => i + 1
  )

  const canPrevious = currentPage > 2
  const canNext = currentPage < pagesQuantity

  return (
    <div className="flex justify-center mt-10">
      <div className="btn-group">
        {canPrevious && (
          <Link to={`?page=${currentPage - 1}`} className="btn btn-sm">
            «
          </Link>
        )}
        {pagesArray.map((pageNumber) => {
          const isActive = currentPage === pageNumber
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
          <Link to={`?page=${currentPage + 1}`} className="btn btn-sm">
            »
          </Link>
        )}
      </div>
    </div>
  )
}
