// import { useEffect, useState } from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopContexProvider } from './context/shop-context';

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
      <ShopContexProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContexProvider>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{serverData}</h1>
      </header> */}
    </div>
  );
}

export default App;
