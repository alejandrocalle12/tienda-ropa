import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext'; // 👈 esto es nuevo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* 👈 envolvemos App con el proveedor del carrito */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
