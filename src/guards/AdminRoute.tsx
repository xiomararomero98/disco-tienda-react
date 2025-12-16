import { Navigate } from "react-router-dom";
import { getUsuario } from "../utils/auth";
import type { JSX } from "react";

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const usuario = getUsuario();

  if (!usuario) return <Navigate to="/login" replace />;

  if (usuario.rol?.nombre !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return children;
}
