import { useState } from "react";
import { registerUser } from "../actions/register-user";
import { useNavigate } from "react-router-dom";

export default function RegistroPage() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",
    direccion: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      alert("Usuario registrado con éxito ❤️");
      navigate("/login");
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className="registro-container">
      <h2>Crear Cuenta</h2>

      <form onSubmit={handleRegister}>

        <label>Nombre</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required />

        <label>Apellido</label>
        <input name="apellido" value={form.apellido} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} required />

        <label>Contraseña</label>
        <input name="password" type="password" value={form.password} onChange={handleChange} required />

        <label>Teléfono</label>
        <input name="telefono" value={form.telefono} onChange={handleChange} />

        <label>Dirección</label>
        <input name="direccion" value={form.direccion} onChange={handleChange} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn">Registrarse</button>
      </form>
    </div>
  );
}
