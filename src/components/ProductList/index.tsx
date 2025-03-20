import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { productList } from '../../feed/sample';
import Sort from '../Sort';
import './productList.css';


interface Product {
	id: number;
	brand: string;
	name: string;
	image: {
	  sm: string;
	};
	price: number;
  }

const ProductList = () => {
	const [products, setProducts] = useState<Product[]>(productList);

	const handleSortChange = (sortType: string) => {
		let sortedItems = [...products];
	
		if (sortType === "highToLow") {
			sortedItems.sort((a, b) => b.price - a.price);
		} else if (sortType === "lowToHigh") {
			sortedItems.sort((a, b) => a.price - b.price); 
		} else if (sortType === "alphabetical") {
			sortedItems.sort((a, b) => a.name.localeCompare(b.name));
		} else if (sortType === "reversed") {
			sortedItems.sort((a, b) => b.name.localeCompare(a.name));
		}
	
		setProducts(sortedItems);
	};

	return (
		<div className="productList">
			<div className="filter">
				<div>{products.length} products</div>
				<Sort onSortChange={handleSortChange} />
			</div>
			<div className="products">
				{products.map((product, id) => (
					<ProductCard
						key={id}
						id={product.id}
						brand={product.brand}
						name={product.name}
						image={product.image.sm}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
