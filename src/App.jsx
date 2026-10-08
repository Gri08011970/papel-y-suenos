import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ItemListContainer from "./pages/ItemListContainer";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="productos" element={<ItemListContainer />} />
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path="carrito" element={<Carrito />} />
      </Route>
    </Routes>
  );
}

export default App;
