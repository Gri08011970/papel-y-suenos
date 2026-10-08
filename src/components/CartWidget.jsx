
import { useContext } from "react";
import { CartContext } from "../context/CarritoContexto";

function CartWidget() {
  const { carrito } = useContext(CartContext);

  const cantidadTotal = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <>
      Carrito 🛒 {cantidadTotal > 0 && `(${cantidadTotal})`}
    </>
  );
}

export default CartWidget;
