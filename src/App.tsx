import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/product"; 

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<ProductPage/>} />
			</Routes>
			<footer style={{ display: "flex", justifyContent: "center", textAlign:'center', padding: 40 }}>
				Copyright © 2022 Hesehus. All rights reserved
				E-mail: salg@hesehus.dk
			</footer>
		</Router>
	);
}

export default App;
