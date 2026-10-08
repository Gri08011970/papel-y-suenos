
import { useState } from "react";
import { CartContext } from "./CarritoContexto";

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  
const addToCart = (producto, cantidad) => {
  setCarrito((carritoActual) => {
    const productoExistente = carritoActual.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      return carritoActual.map((item) =>
        item.id === producto.id
          ? {
              ...item,
              cantidad: Math.min(
                item.cantidad + cantidad,
                producto.stock
              ),
            }
          : item
      );
    }

    return [
      ...carritoActual,
      { ...producto, cantidad },
    ];
  });
};


const removeFromCart = (id) => {
  setCarrito((carritoActual) =>
    carritoActual.filter((producto) => producto.id !== id)
  );
};


const cambiarCantidad = (id, cambio) => {
  setCarrito((carritoActual) =>
    carritoActual.map((producto) =>
      producto.id === id
        ? {
            ...producto,
            cantidad: Math.max(
              1,
              Math.min(producto.stock, producto.cantidad + cambio)
            ),
          }
        : producto
    )
  );
};


const clearCart = () => {
  setCarrito([]);
};


  return (
    <CartContext.Provider value={{ carrito, setCarrito, addToCart, removeFromCart, cambiarCantidad, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
