import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  const { categorySlug } = params

  const category = {}

  return json(category)
}

export default function CategorySlug() {
  const category = useLoaderData()

  return <div>{JSON.stringify(category, null, 2)}</div>
}
