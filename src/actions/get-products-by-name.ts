import { productosMock } from "../mock-data/products.mocks";
import type { Product } from "../interfaces/product.interface";
import { getAllProducts } from "../actions/get-all-products";



export async function getProductsByName(query: string): Promise<Product[]> {
  const q = (query ?? "").trim().toLowerCase();
  const all = await getAllProducts();
  if (!q) return all;
  return all.filter(p => p.nombre.toLowerCase().includes(q));
}
