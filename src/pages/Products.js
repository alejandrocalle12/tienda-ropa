import React from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

function Products() {
  const { addToCart } = useCart();

  const productos = [
    { id: 1, nombre: "Blusa corta casual", precio: 30000, imagen: "/img/Blusacortacasualmariposa.jpg" },
    { id: 2, nombre: "Blusa Corset", precio: 40000, imagen: "/img/Blusacorsetflores.jpg" },
    { id: 3, nombre: "Conjunto Casual Negro", precio: 120000, imagen: "/img/Conjuntocasualnegro.jpg" },
    { id: 4, nombre: "Conjunto Deportivo", precio: 110000, imagen: "/img/Conjuntodeportivomorado.jpg" },
    { id: 5, nombre: "Mini Falda", precio: 65000, imagen: "/img/Faldacortajeanazul.jpg" },
    { id: 6, nombre: "Pantalón Largo", precio: 85000, imagen: "/img/Pantaloncargonegro.jpg" },
    { id: 7, nombre: "Vestido Corto", precio: 70000, imagen: "/img/Vestidocortoblacoflores.jpg" },
    { id: 8, nombre: "Vestido Largo Casual Arcoiris", precio: 120000, imagen: "/img/Vestidolargocasualarcoiris.jpg" },
    { id: 9, nombre: "Beisbolera Roja", precio: 60000, imagen: "/img/Beisbolerasoxroja.jpg" },
    { id: 10, nombre: "Buso Manga Corta", precio: 35000, imagen: "/img/Busomangacortabasiconegro.jpg" },
    { id: 11, nombre: "Camiseta estampada", precio: 80000, imagen: "/img/Camisaestampadaverde.jpg" },
    { id: 12, nombre: "Chaqueta Besibolera", precio: 110000, imagen: "/img/Chaquetabeisboleranegrared.jpg" },
    { id: 13, nombre: "Conjunto Jacket negro", precio: 130000, imagen: "/img/Conjuntojacknegro.jpg" },
    { id: 14, nombre: "Overol desgastado", precio: 150000, imagen: "/img/Overoldesgastadonegro.jpg" },
    { id: 15, nombre: "Pantalon Largo negro", precio: 70000, imagen: "/img/Pantalonlargonegro.jpg" },
    { id: 16, nombre: "Pantalon Jean Azul", precio: 85000, imagen: "/img/Pantalonjeanazul.jpg" },
    { id: 17, nombre: "Camiseta basic negra", precio: 35000, imagen: "/img/camiseta.jpg" },
    { id: 18, nombre: "Chaqueta casual", precio: 120000, imagen: "/img/chaquetacasual.jpg" },
    { id: 19, nombre: "Jean slim fit", precio: 90000, imagen: "/img/jeanslim.jpg" },
    { id: 20, nombre: "Camiseta Goku", precio: 43000, imagen: "/img/goku.jpg" },
  ];

  return (
    <div>
      <h2 className="products-title">🛍️ Mil Productos, Mil Estilos</h2>

      <div className="products-container">
        {productos.map((producto) => (
          <div className="product-card" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="product-image"
            />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => addToCart({ ...producto, cantidad: 1 })}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
