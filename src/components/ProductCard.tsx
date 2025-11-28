import { Link } from "react-router-dom";
import type { Product } from "../interfaces/product.interface";

export default function ProductCard({ p }: { p: Product }) {
  const agregarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existe = carrito.find((item: Product & { cantidad: number }) => item.id === p.id);
    
    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
      carrito.push({ ...p, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${p.nombre} agregado ✅`);
  };

  return (
    <article className="producto">
      <img src={p.imagen} alt={p.nombre} />
      <h3>{p.nombre}</h3>
      <p>${p.precio.toLocaleString("es-CL")}</p>
      <div className="producto-acciones">
        <Link to={`/producto/${p.id}`} className="btn">
          Ver detalle
        </Link>
        <button className="btn" onClick={agregarCarrito}>
          Añadir
        </button>
      </div>
    </article>
  );
}
