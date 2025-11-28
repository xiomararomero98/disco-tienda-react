import type { Product } from "../interfaces/product.interface";
import entradaImg from "../assets/img/entradas.png";
import cervezasImg from "../assets/img/cervezas.png";
import whiskysImg from "../assets/img/whiskys.png";

export const productosMock: Product[] = [
  { id: 1, nombre: "Entrada General", precio: 10000, imagen: entradaImg, descripcion: "Acceso general a Disco Club." },
  { id: 2, nombre: "Promo Balde de Cervezas", precio: 20000, imagen: cervezasImg, descripcion: "6 cervezas heladas para compartir." },
  { id: 3, nombre: "Promo Balde de Whisky + bebidas", precio: 50000, imagen: whiskysImg, descripcion: "Whisky premium con mezclas para la noche." }
];
