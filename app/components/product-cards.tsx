import { FunctionComponent } from 'react';
import { Product } from '~/types';

interface ProductsProps {
	products: Product[];
}

export const ProductCards: FunctionComponent<ProductsProps> = ({
	products,
}) => {
	return (
		<div className="container lg mb-8">
			<article className="prose">
				<h1>Produk Terbaru</h1>
			</article>
			<div className="flex gap-4">
				{products.map((product) => {
					return <ProductCard key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
};

interface ProductProps {
	product: Product;
}

export const ProductCard: FunctionComponent<ProductProps> = ({ product }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-lg">
			<figure>
				<img
					className="min-h-[225px]"
					src="https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
					alt={product.name}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{product.name}
					{/* <div className="badge badge-primary">BARU</div> */}
				</h2>
				<p>Deskripsi produk</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Label 1</div>
					<div className="badge badge-outline">Label 2</div>
				</div>
			</div>
		</div>
	);
};
