import { LoaderFunction, useLoaderData } from 'remix'
import { Navbar, ProductCards, WhatsAppCard } from '~/components'

export const loader: LoaderFunction = async () => {
  const products = [
    { id: 1, name: 'Boks 1' },
    { id: 2, name: 'Boks 2' },
    { id: 3, name: 'Boks 3' },
    { id: 4, name: 'Boks 4' },
  ]

  return {
    products,
  }
}

export default function Index() {
  const { products } = useLoaderData()

  return (
    <div>
      <Navbar />
      <ProductCards products={products} />
      <WhatsAppCard />
    </div>
  )
}
