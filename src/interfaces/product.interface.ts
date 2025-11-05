// src/interfaces/product.interface.ts
export interface Product {
  id: number | string;
  nombre: string;
  precio: number;
  descripcion?: string;
  imagenUrl?: string;
  categoria?: string;
  stock?: number;
}
