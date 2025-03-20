import React from 'react';
import ProductList from '../../components/ProductList';
import './home.css'

export const Home: React.FunctionComponent = () => {

	return (
		<main>
		<h1 className='title'>Toys</h1>
		<ProductList/>

		</main>
	);
};
