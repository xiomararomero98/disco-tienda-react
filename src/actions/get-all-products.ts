import { productosMock } from "../mock-data/products.mocks";
import type { Product } from "../interfaces/product.interface";

export async function getAllProducts(): Promise<Product[]> {
  // luego aquí cambias a fetch/axios a tu backend
  return productosMock;
}