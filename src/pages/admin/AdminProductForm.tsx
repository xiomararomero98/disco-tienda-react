import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../../actions/products-admin";
import type { Product } from "../../interfaces/product.interface";

interface Props {
  producto: Product | null;
  onFinish: () => void;
}

export default function AdminProductForm({ producto, onFinish }: Props) {
  const [form, setForm] = useState<Product>({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    imagen: ""
  });

  useEffect(() => {
    if (producto) {
      setForm(producto); 
    } else {
      setForm({
        nombre: "",
        descripcion: "",
        precio: 0,
        stock: 0,
        imagen: ""
      });
    }
  }, [producto]);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (producto?.id) {
      await updateProduct(producto.id, form);
    } else {
      await createProduct(form);
    }

    onFinish(); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />

      <input name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" required />

      <input type="number" name="precio" value={form.precio} onChange={handleChange} placeholder="Precio" required />

      <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" required />

      <input name="imagen" value={form.imagen} onChange={handleChange} placeholder="/img/imagen.png" required />

      <button type="submit">
        {producto ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
