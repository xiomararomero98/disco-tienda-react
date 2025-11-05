import { useEffect, useState } from "react";
import { getAllProducts } from "../actions/get-all-products";
import type { Product } from "../interfaces/product.interface";
import ProductCard from "../components/ProductCard";

export default function ProductosPage() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setItems);
  }, []);

  return (
    <section className="productos-destacados">
      <h2>Productos</h2>
      <div id="lista-productos" className="grid-productos">
        {items.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
