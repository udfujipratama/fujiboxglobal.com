import { json, LoaderFunction, useLoaderData } from 'remix'

export const loader: LoaderFunction = async () => {
  const categories: any[] = []

  return json(categories)
}

export default function Categories() {
  const categories = useLoaderData()

  return <div>{JSON.stringify(categories, null, 2)}</div>
}
