// import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Catalog from './pages/shop/FoodMenu';
import ProductDetailsPage from './pages/ProductDetailsPage';
import About from './pages/About';
// import CartPage from './pages/cart/CartPage';
import CartPage from './pages/cart/CartPage';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/:productId" element={<ProductDetailsPage />} />
        <Route path="/eats" element={<Catalog />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
