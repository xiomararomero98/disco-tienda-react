import { Link } from "react-router-dom";
import type{ Product } from "../interfaces/product.interface.ts";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="product-card">
      {p.imagenUrl && (
        <img src={p.imagenUrl} alt={p.nombre} className="product-img" />
      )}
      <h3>{p.nombre}</h3>
      <p className="price">${p.precio}</p>
      <Link to={`/producto/${p.id}`} className="btn btn-sm">
        Ver detalle
      </Link>
    </article>
  );
}