import React from 'react';
import './productCard.css';
import { useNavigate } from 'react-router-dom';


interface ProductCardProps {
	id: number;
	brand: string;
	name: string;
	image: string;
	price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({id, brand, name, image, price }) => {
	const navigate = useNavigate();

	return (
		<div className="productCard" 
		onClick={() => navigate(`/product/${id}`)}>
			<img src={image}></img>
			<div className="info">
				<p style={{fontWeight: 'bold'}}>{brand}</p>
				<p>{name}</p>
				<p style={{fontWeight: 'bold', marginTop: 10}}>€{price}</p>
			</div>
		</div>
	);
};

export default ProductCard;
