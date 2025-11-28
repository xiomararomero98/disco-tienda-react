import axios from "axios";

export async function loginUser(email: string, password: string) {
  try {
    const res = await axios.post(
      `http://localhost:8081/usuarios/login?email=${email}&password=${password}`
    );
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Credenciales inválidas";
  }
}
