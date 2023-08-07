// import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import FoodMenu from './pages/shop/FoodMenu';
import ProductDetailsPage from './pages/ProductDetailsPage';
import About from './pages/About';
import CartPage from './pages/cart/CartPage';
import HomePage from './pages/Home';
// import SignIn from './pages/Sign-in';
import Signup from './pages/Sign-up';
import AuthPage from './pages/AuthPage';
////
import { useState, useEffect } from 'react';
import { fetchUser, fetchCartItems } from './lib';
import AppContext from './components/AppContext';
const tokenKey = 'react-context-jwt';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [cart, setCart] = useState();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    async function setCustomer() {
      const auth = localStorage.getItem(tokenKey);
      if (auth) {
        const a = JSON.parse(auth);
        const customer = await fetchUser(a.user.username);
        console.log(customer);
        setUser(customer);
        setToken(a.token);
        const cart = await fetchCartItems(customer.customerId);
        setCart(cart);
      }
      setIsAuthorizing(false);
    }
    setCustomer();
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth) {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = {
    user,
    token,
    handleSignIn,
    handleSignOut,
    cart,
    setCart,
  };
  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/:productId" element={<ProductDetailsPage />} />
          <Route path="/eats" element={<FoodMenu />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="sign-in" element={<AuthPage action="sign-in" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
