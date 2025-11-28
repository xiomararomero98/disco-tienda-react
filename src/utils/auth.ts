export function getUsuario() {
  try {
    return JSON.parse(localStorage.getItem("usuario") || "null");
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "/"; // recargar la página al salir
}
