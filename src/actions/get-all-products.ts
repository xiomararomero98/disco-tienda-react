import axios from "axios";
import type { Product } from "../interfaces/product.interface";

const API_URL = "http://localhost:8082/productos";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await axios.get<Product[]>(API_URL);
    return res.data;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    return [];
  }
}
