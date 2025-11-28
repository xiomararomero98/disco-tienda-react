import type { Product } from "../../interfaces/product.interface";

interface Props {
  productos: Product[];
  onEdit: (p: Product) => void;
  onDelete: (id: number) => void;
}

export default function AdminProductList({ productos, onEdit, onDelete }: Props) {
  return (
    <table border={1} cellPadding={8} style={{ width: "100%", marginTop: 20 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nombre}</td>
            <td>${p.precio.toLocaleString("es-CL")}</td>
            <td>{p.stock}</td>
            <td><img src={p.imagen} width="50" /></td>

            <td>
              <button onClick={() => onEdit(p)}>Editar</button>
              <button onClick={() => onDelete(p.id!)} style={{ marginLeft: 8, color: "red" }}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
