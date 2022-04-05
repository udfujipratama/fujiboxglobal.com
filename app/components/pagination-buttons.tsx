import { FunctionComponent } from 'react'

interface PaginationButtonsProps {
  productsConnection: any
}

export const PaginationButtons: FunctionComponent<PaginationButtonsProps> = ({
  productsConnection,
}) => {
  const { count } = productsConnection?.aggregate

  return (
    <div className="flex justify-center mt-10">
      <div className="btn-group">
        <button className="btn btn-sm">«</button>
        <button className="btn btn-sm btn-active">1</button>
        <button className="btn btn-sm">2</button>
        <button className="btn btn-sm">3</button>
        <button className="btn btn-sm">4</button>
        <button className="btn btn-sm">»</button>
      </div>
      <p>{count}</p>
    </div>
  )
}
