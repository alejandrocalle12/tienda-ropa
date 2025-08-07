import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
