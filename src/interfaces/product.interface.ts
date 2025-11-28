export interface Product {
  id?: number; // opcional
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string; // ruta tipo "/img/cervezas.png"
}
