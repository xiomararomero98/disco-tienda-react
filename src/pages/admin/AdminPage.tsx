import { useEffect, useState } from "react";
import { fetchAllProductsAdmin, deleteProduct } from "../../actions/products-admin";

import AdminProductForm from "./AdminProductForm";
import AdminProductList from "./AdminProductList";

import type { Product } from "../../interfaces/product.interface";

export default function AdminPage() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  const cargarProductos = async () => {
    const data = await fetchAllProductsAdmin();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleFinish = () => {
    setEditing(null);
    cargarProductos();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Panel Administrativo</h1>

      <h2>{editing ? "Editar Producto" : "Crear Producto"}</h2>

      <AdminProductForm producto={editing} onFinish={handleFinish} />

      <h2 style={{ marginTop: 40 }}>Lista de Productos</h2>

      <AdminProductList
        productos={productos}
        onEdit={(prod) => setEditing(prod)}
        onDelete={async (id) => {
          if (confirm("¿Eliminar producto?")) {
            await deleteProduct(id);
            cargarProductos();
          }
        }}
      />
    </div>
  );
}
