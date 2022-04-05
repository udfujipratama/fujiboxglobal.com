import { FunctionComponent } from 'react'
import { Link, useSearchParams } from 'remix'

interface PaginationButtonsProps {
  productsConnection: any
}

export const PaginationButtons: FunctionComponent<PaginationButtonsProps> = ({
  productsConnection,
}) => {
  const [searchParams] = useSearchParams()
  const itemsPerPage = 10
  const { count } = productsConnection?.aggregate

  const pageQuery: number = Number(searchParams.get('page'))
  const pagesQuantity: number = Math.ceil(count / itemsPerPage)
  const pagesArray: number[] = Array.from(
    { length: pagesQuantity },
    (_, i) => i + 1
  )

  return (
    <div className="flex justify-center mt-10">
      <div className="btn-group">
        <button className="btn btn-sm">«</button>
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
        <button className="btn btn-sm">»</button>
      </div>
    </div>
  )
}
