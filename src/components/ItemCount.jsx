
import { useState, useContext } from "react";
import { CartContext } from "../context/CarritoContexto";


function ItemCount({ producto, inicial = 1 }) {
  const stock = producto.stock;
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(inicial);

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

 
const agregarAlCarrito = () => {
  const confirmar = window.confirm(
    `🌸 ¿Deseás agregar ${cantidad} unidad(es) de ${producto.nombre} al carrito?`
  );

  if (confirmar) {
    addToCart(producto, cantidad);
  }
};

  
return (
  <div className="selector-compra">
    <div className="item-count">
      <button onClick={disminuir} disabled={cantidad <= 1}>
        −
      </button>

      <span>{cantidad}</span>

      <button onClick={aumentar} disabled={cantidad >= stock}>
        +
      </button>
    </div>

    <button
      className="boton-agregar"
      onClick={agregarAlCarrito}
    >
      🛒 Agregar al carrito
    </button>
  </div>
);

}

export default ItemCount;
