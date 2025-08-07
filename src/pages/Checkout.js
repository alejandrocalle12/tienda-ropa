// src/pages/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // 👈 nuevo archivo CSS

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu compra, " + formData.nombre + "!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Resumen de tu Compra</h2>

      <ul className="checkout-list">
        {cartItems.map((item) => (
          <li key={item.id} className="checkout-item">
            {item.nombre} x {item.cantidad} = ${item.precio * item.cantidad}
          </li>
        ))}
      </ul>

      <h3 className="checkout-total">Total: ${total.toLocaleString('es-CO')}</h3>

      <h2 className="checkout-subtitle">Datos de Envío</h2>

      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección de envío"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <button type="submit" className="checkout-button">Finalizar compra</button>
      </form>
    </div>
  );
};

export default Checkout;

