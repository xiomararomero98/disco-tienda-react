import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product.interface";

interface Item extends Product {
  cantidad: number;
}

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<Item[]>([]);

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCarrito(guardado);
  }, []);

  const guardar = (nuevo: Item[]) => {
    setCarrito(nuevo);
    localStorage.setItem("carrito", JSON.stringify(nuevo));
  };

  const cambiarCantidad = (index: number, cambio: number) => {
    const nuevo = [...carrito];
    nuevo[index].cantidad += cambio;
    if (nuevo[index].cantidad <= 0) nuevo.splice(index, 1);
    guardar(nuevo);
  };

  const eliminar = (index: number) => {
    const nuevo = [...carrito];
    nuevo.splice(index, 1);
    guardar(nuevo);
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
  };

  const finalizarCompra = () => {
    if (carrito.length === 0) {
    alert("❌ Tu carrito está vacío.");
    return;
  };
  alert("✅ ¡Gracias por tu compra!");
  vaciarCarrito();
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Tu Carrito</h2>

      <table className="carrito-tabla">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="carrito-lista">
          {carrito.map((p, i) => (
            <tr key={p.id}>
              <td><img src={p.imagen} alt={p.nombre} width="60" /></td>
              <td>{p.nombre}</td>
              <td>${p.precio.toLocaleString("es-CL")}</td>
              <td>
                <button className="btn" onClick={() => cambiarCantidad(i, -1)}>-</button>
                <span style={{ margin: "0 8px" }}>{p.cantidad}</span>
                <button className="btn" onClick={() => cambiarCantidad(i, 1)}>+</button>
              </td>
              <td>${(p.precio * p.cantidad).toLocaleString("es-CL")}</td>
              <td><button className="btn" onClick={() => eliminar(i)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="carrito-total">
        <p>Total: ${total.toLocaleString("es-CL")}</p>
      </div>

      <div className="volver-container">
        <button className="volver-btn" onClick={vaciarCarrito}>Vaciar</button>
        <button className="carrito-btn" onClick={finalizarCompra}>Finalizar</button>
      </div>
    </div>
  );
}
