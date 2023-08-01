// import { useEffect, useState } from 'react';
// import './App.css';
// import Shop from './pages/shop/shop';
// import Cart from './pages/cart/cart';
// import { ShopContexProvider } from './context/shop-context';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';

import FoodMenu from './pages/shop/FoodMenu';
import ProductDetails from './pages/shop/ProductDetailsPage';
import About from './pages/About';
import CartPage from './pages/cart/CartPage';

function App() {
  // const [serverData, setServerData] = useState('');

  // useEffect(() => {
  //   async function readServerData() {
  //     const resp = await fetch('/api/hello');
  //     const data = await resp.json();

  //     console.log('Data from server:', data);

  //     setServerData(data.message);
  //   }

  //   readServerData();
  // }, []);

  return (
    <div className="App">
      {/* <ShopContexProvider> */}
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/eats" element={<FoodMenu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" />
      </Routes>
      {/* </ShopContexProvider> */}
    </div>
  );
}

export default App;
