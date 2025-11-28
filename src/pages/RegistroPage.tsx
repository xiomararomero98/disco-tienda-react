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
    <div>
      <h1>Productos</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </form>

        {error && <p style={{color:"red"}}>{error}</p>}

        <button type='submit'>Ingresar</button>
    </div>
  );
}
