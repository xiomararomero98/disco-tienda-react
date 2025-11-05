import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import type{ Product } from "../interfaces/product.interface";
import { getProductsByName } from "../actions/get-products-by-name";

export default function HomePage() {
  const [destacados, setDestacados] = useState<Product[]>([]);

  useEffect(() => {
     getProductsByName("").then((list: Product[]) => setDestacados(list.slice(0, 6)));
    }, []);

  return (
    <>
      {/* HERO (usa .hero de tu CSS) */}
      <section className="hero">
        {/* La imagen de fondo sale del CSS */}
      </section>

      {/* Presentación (usa .presentacion y .presentacion-text) */}
      <section className="presentacion">
        <div className="presentacion-text">
          <h2>Vive la noche con Disco-Tienda</h2>
          <p>Destilados, packs y accesorios para tu mejor previa. Envíos rápidos en Santiago.</p>
          <Link to="/productos" className="btn">Ver productos</Link>
        </div>
      </section>

      {/* Productos destacados (usa .productos-destacados, .grid-productos, .producto) */}
      <section className="productos-destacados">
        <h2>Destacados</h2>
        <div className="grid-productos">
          {destacados.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </>
  );
}
