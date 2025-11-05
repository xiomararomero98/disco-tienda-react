import React from "react";

export default function ProductoCard({ producto, onAgregar }: any) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center bg-dark text-light">
        <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p>${producto.precio.toLocaleString("es-CL")}</p>
          <button className="btn btn-primary" onClick={() => onAgregar(producto)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
