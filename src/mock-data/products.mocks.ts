import type { Product } from "../interfaces/product.interface";

export const productosMock: Product[] = [
  { id: 1, nombre: "Entrada General", precio: 10000, imagen: "/img/entradas.png", descripcion: "Acceso general a Disco Club." },
  { id: 2, nombre: "Promo Balde de Cervezas", precio: 20000, imagen: "/img/cervezas.png", descripcion: "6 cervezas heladas para compartir." },
  { id: 3, nombre: "Promo Balde de Whisky + bebidas", precio: 50000, imagen: "/img/whiskys.png", descripcion: "Whisky premium con mezclas para la noche." }
];
