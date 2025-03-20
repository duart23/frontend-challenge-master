import { productList } from '../../feed/sample';
import { useNavigate, useParams } from 'react-router-dom';
import './productPage.css';
import arrow from './../../assets/icons/chevronDown.svg';

export const ProductPage = () => {
	const { id } = useParams();
	const product = productList.find((p) => p.id === Number(id));
	const navigate = useNavigate();

	const addToBasket = () => {
		console.log("Added to basket: " + id);
	}

	if (!product) return <p>Product not found</p>;

	return (
		<div>
			<div className="back"
			onClick={() => navigate(-1) }>
				<span>
					<img src={arrow}></img>
				</span>
				Back
			</div>
			<div className="product">
				<img src={product.image.lg}></img>
				<div className="info">
					<div className="top">
						<p>{product.brand}</p>
						<p style={{ fontWeight: 'bold', fontSize: '28px' }}>{product.name}</p>
						<p style={{ fontWeight: 'bold', fontSize: '20px' }}>€{product.price}</p>
						<button className="button"
						onClick={addToBasket}>Add to Basket</button>
					</div>
					<div className="description">
						<h2>Description</h2>
						<p>{product.description}</p>
					</div>
					<div className="specifications">
						<h2>Specifications</h2>
						<div className="spec">
							<p className="name">Name</p>
							<p className="value">{product.name}</p>
						</div>
						{product.specifications.map((spec, index) => (
							<div className="spec" key={index}>
								<p className="name">{spec.name}</p>
								<p className="value">{spec.value}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
