import { useState } from "react";
import { registerUser } from "../actions/register-user";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
// Componente ProductosPage
const RegistroPage: React.FC = () => {
  const[nombre, setNombre] = useState("");
  const[apellido, setApellido] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[username, setUsername] = useState("");
  const[telefono, setTelefono] = useState("");
  const[direccion, setDireccion] = useState("");
  const[error, setError] = useState("");
  
  const handleRegister = async(e: React.FormEvent) => {
=======
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
>>>>>>> 98d1f43d6ca408eb4a37ace8223efbdd63e67149
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
<<<<<<< HEAD
    <div className='registro-container'>
      <div className='registro-box'>
        <h2>Registro</h2>
        <form onSubmit={handleRegister}>
          <div>
            <label>Nombre: *</label>
            <input
              type='text'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellido(s): *</label>
            <input
              type='text'
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Usuario:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Email: *</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña: *</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Telefono: *</label>
            <input
              type='tel'
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Direccion: *</label>
            <input
              type='text'
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
          <button type='submit'>Registrarse</button>
        </form>
        {error && <p style={{color:"red"}}>{error}</p>}
      </div>
=======
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
>>>>>>> 98d1f43d6ca408eb4a37ace8223efbdd63e67149
    </div>
  );
}
