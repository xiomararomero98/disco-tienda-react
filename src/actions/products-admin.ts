import axios from "axios";
import type { Product } from "../interfaces/product.interface";

const API = "http://localhost:8082/productos";

export async function fetchAllProductsAdmin() {
  const res = await axios.get<Product[]>(API);
  return res.data;
}

export async function createProduct(data: Omit<Product, "id">) {
  const res = await axios.post<Product>(API, data);
  return res.data;
}

export async function updateProduct(id: number, data: Product) {
  const res = await axios.put<Product>(`${API}/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: number) {
  await axios.delete(`${API}/${id}`);
}
