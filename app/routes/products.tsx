import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async () => {
  const products: any[] = []

  return json(products)
}

export default function Products() {
  const products = useLoaderData()

  return <div>{JSON.stringify(products, null, 2)}</div>
}
