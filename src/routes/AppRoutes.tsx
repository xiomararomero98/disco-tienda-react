
import { createBrowserRouter } from "react-router-dom";
import ImageApp from "../ImageApp";
import ProductosPage from '../pages/ProductosPage';
import ProductoDetallePage from "../pages/ProductoDetallePage";
import CarritoPage from "../pages/CarritoPage";
import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import ContactoPage from "../pages/ContactoPage";
import NosotrosPage from "../pages/NosotrosPage";
import BlogsPage from "../pages/BlogsPage";
import HomePage from "../pages/HomePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageApp />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "productos", element: <ProductosPage /> },
      { path: "producto/:id", element: <ProductoDetallePage /> },
      { path: "carrito", element: <CarritoPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "registro", element: <RegistroPage /> },
      { path: "contacto", element: <ContactoPage /> },
      { path: "nosotros", element: <NosotrosPage /> },
      { path: "blogs", element: <BlogsPage /> },
    ],
  },
]);
