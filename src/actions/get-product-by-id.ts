import axios from "axios";
import type { Product } from "../interfaces/product.interface";

export async function getProductById(id: number | string): Promise<Product | null> {
  try {
    const res = await axios.get<Product>(`http://localhost:8082/productos/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    return null;
  }
}
