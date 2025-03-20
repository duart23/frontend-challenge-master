import React from 'react';
import hesehus from './../../assets/logos/hesehus.svg';
import basket from './../../assets/icons/basket.svg';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import search from './../../assets/icons/search.svg';

export const Header: React.FunctionComponent = () => {
	const navigate = useNavigate();
	const [windowSize, setWindowSize] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				winWidth: window.innerWidth,
				winHeight: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<header className="header">
			<div className="left">
				<img onClick={() => navigate('/')} src={hesehus} />
				{windowSize.winWidth >= 758 && <input placeholder="Søg i alle produkter" className="searchbar"></input>}
			</div>
			<div className="right">
				{windowSize.winWidth < 758 && (
					<div className="cart">
						<img src={search}></img>
						<p>Search</p>
					</div>
				)}
				<div className="cart">
					<img src={basket} />
					<p>Cart</p>
				</div>
			</div>
		</header>
	);
};
