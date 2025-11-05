import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../actions/get-product-by-id";
import type { Product } from "../interfaces/product.interface";

export default function ProductoDetallePage() {
  const { id } = useParams();
  const [producto, setProducto] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(p => setProducto(p ?? null));
    }
  }, [id]);

  const agregarCarrito = () => {
    if (!producto) return;
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existe = carrito.find((item: any) => item.id === producto.id);
    if (existe) {
      existe.cantidad = (existe.cantidad || 1) + 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${producto.nombre} agregado ✅`);
  };

  if (!producto) return <p style={{ padding: 20 }}>Cargando...</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-box">
        <img src={producto.imagen} alt={producto.nombre} className="detalle-img" />
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="detalle-precio">${producto.precio.toLocaleString("es-CL")}</p>
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <button className="btn" onClick={agregarCarrito}>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
