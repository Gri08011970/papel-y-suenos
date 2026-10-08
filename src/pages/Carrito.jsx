import { useContext } from "react";
import { CartContext } from "../context/CarritoContexto";

function Carrito() {
  const { carrito, removeFromCart, cambiarCantidad, clearCart } =
    useContext(CartContext);

  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.precio * producto.cantidad;
  }, 0);

  return (
    <section className="carrito">
      <h2>🛒 Tu carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>🌸 Tu carrito está vacío.</p>
      ) : (
        <div>
          <div className="carrito-grid">
            {carrito.map((producto) => (
              <div key={producto.id} className="carrito-item">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="carrito-imagen"
                />

                <h3>{producto.nombre}</h3>

                <div className="carrito-cantidad">
                  <span>Cantidad: </span>

                  <button
                    type="button"
                    onClick={() => cambiarCantidad(producto.id, -1)}
                    disabled={producto.cantidad <= 1}
                  >
                    −
                  </button>

                  <strong>{producto.cantidad}</strong>

                  <button
                    type="button"
                    onClick={() => cambiarCantidad(producto.id, 1)}
                    disabled={producto.cantidad >= producto.stock}
                  >
                    +
                  </button>
                </div>

                <p>
                  Precio unitario: ${producto.precio.toLocaleString("es-AR")}
                </p>

                <p>
                  Subtotal: $
                  {(producto.precio * producto.cantidad).toLocaleString(
                    "es-AR",
                  )}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    const confirmar = window.confirm(
                      `🗑️ ¿Estás segura/o de que deseás eliminar las ${producto.cantidad} unidad(es) de ${producto.nombre} del carrito?`,
                    );

                    if (confirmar) {
                      removeFromCart(producto.id);
                    }
                  }}
                >
                  🗑️ Eliminar producto
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-resumen">
            <p>🛍️ Resumen de tu compra</p>

            <p>
              Productos seleccionados:{" "}
              {carrito.reduce(
                (cantidad, producto) => cantidad + producto.cantidad,
                0,
              )}
            </p>

            <h3>🌸 Total: ${total.toLocaleString("es-AR")}</h3>
          </div>

          <button
            className="producto-boton"
            onClick={() => {
              const confirmar = window.confirm(
                "🛒 ¿Estás segura/o de que deseás vaciar todo el carrito?",
              );

              if (confirmar) {
                clearCart();
              }
            }}
          >
            🗑️ Vaciar carrito
          </button>
        </div>
      )}
    </section>
  );
}

export default Carrito;
