import { useEffect, useState } from "react";
import Item from "../components/Item";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
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
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando productos... 🌸</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="catalogo">
      <h2>🌸 Nuestros productos</h2>

      <p>Descubrí nuestra colección de papelería creativa.</p>

      <div className="lista-productos">
        {productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
