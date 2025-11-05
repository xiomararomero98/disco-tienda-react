export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;       // ruta a la imagen
  descripcion: string;
}

export interface CartItem extends Product {
  cantidad: number;
}
