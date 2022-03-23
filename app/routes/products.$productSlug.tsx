import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  const { productSlug } = params

  const product = {}

  return json(product)
}

export default function ProductSlug() {
  const product = useLoaderData()

  return <div>{JSON.stringify(product, null, 2)}</div>
}
