import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <article className="tarjeta-producto">
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <span className="producto-categoria">{producto.categoria}</span>

        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <strong className="producto-precio">
          ${producto.precio.toLocaleString("es-AR")}
        </strong>

        <Link to={`/producto/${producto.id}`} className="producto-boton">
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default Item;
