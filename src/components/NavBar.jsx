
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>

      <Link to="/carrito">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default NavBar;
