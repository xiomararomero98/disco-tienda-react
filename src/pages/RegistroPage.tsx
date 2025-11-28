import React, { useState } from 'react';

// Componente ProductosPage
const RegistroPage: React.FC = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[username, setUsername] = useState("");
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
};

export default RegistroPage;