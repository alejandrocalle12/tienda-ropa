import './App.css'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Noticias from "./pages/Noticias";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/noticias" element={<Noticias />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
