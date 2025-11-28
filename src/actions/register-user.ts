import axios from "axios";

export async function registerUser(data: {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  direccion: string;
}) {
  try {
    const res = await axios.post("http://localhost:8081/usuarios", {
      ...data,
      rol: { id: 2 } // CLIENTE por defecto
    });

    return res.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Error al registrar usuario";
  }
}
