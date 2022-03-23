import { LoaderFunction, useLoaderData } from "remix";
import {
  Category,
  Hero,
  Navbar,
  ProductCards,
  WhatsAppCard,
} from "~/components";

export const loader: LoaderFunction = async () => {
  const products = [
    { id: 1, name: "Boks 1" },
    { id: 2, name: "Boks 2" },
    { id: 3, name: "Boks 3" },
    { id: 4, name: "Boks 4" },
  ];

  const categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" },
    { id: 6, name: "category 6" },
  ];

  return {
    products,
    categories,
  };
};

export default function Index() {
  const { products, categories } = useLoaderData();

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCards products={products} />
      <WhatsAppCard />
      <Category categories={categories} />
    </div>
  );
}
