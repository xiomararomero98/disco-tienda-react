import React, { useState } from 'react';

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
    e.preventDefault();
    setError("");

    try{
      const response = await fetch("http://localhost:8080/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({email, password, username})
      });

      if(!response.ok){
        setError("")
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";
    }catch{
      setError("Error con el conectar al servidor");
    }
  }
  
  return (
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
    </div>
  );
};

export default RegistroPage;