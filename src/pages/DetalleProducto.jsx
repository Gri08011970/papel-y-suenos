
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../components/ItemCount";

function DetalleProducto() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return respuesta.json();
      })
      .then((datos) => {
        const encontrado = datos.find(
          (item) => String(item.id) === id
        );

        setProducto(encontrado || null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p>Cargando producto... 🌸</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <section className="detalle-producto">
      <h2>🌸 {producto.nombre}</h2>

      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <p>{producto.descripcion}</p>

      <h3>
        ${producto.precio.toLocaleString("es-AR")}
      </h3>

      <p>Stock disponible: {producto.stock}</p>
      <ItemCount producto={producto} />
    </section>
  );
}

export default DetalleProducto;

