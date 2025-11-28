import React, { useState } from 'react';

// Componente ProductosPage
const LoginPage: React.FC = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("")
  const[error, setError] = useState("")

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try{
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method : "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({email, password})
      });

      if(!response.ok){
        setError("Credenciales invalidas");
        return;
      }

      const data = await response.json();

      localStorage.setItem("token", data.token);

      window.location.href = "/dashboard";
    }catch{
      setError("Error al conectar con el servidor")
    }
  };

  const handleRegister = () => {
    window.location.href = "/register"; 
  };
  
  
  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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

          {error && <p style={{color:"red"}}>{error}</p>}

          <button type='submit'>Ingresar</button>
        </form>
        <button onClick={handleRegister} className="register-button">Registrarse</button>
      </div>
    </div>
  );
};

export default LoginPage;