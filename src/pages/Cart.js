// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="empty-message">Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-image" />
              <div className="cart-details">
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio.toLocaleString('es-CO')}</p>
                <div className="quantity-control">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p>Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-CO')}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
          ))}

          <h3 className="total">Total a pagar: ${total.toLocaleString('es-CO')}</h3>
          <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>

          <div className="checkout-btn-container">
            <Link to="/checkout">
              <button className="checkout-btn">Ir al checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
