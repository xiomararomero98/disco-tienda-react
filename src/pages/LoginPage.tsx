import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions/login-user";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(email, password);

      // Guardar usuario completo (con rol)
      localStorage.setItem("usuario", JSON.stringify(user));

      alert(`Bienvenido/a ${user.nombre} ❤️`);

      navigate("/"); // ir al home
    } catch (err: any) {
      setError(err);
    }
  };

  return (
    <div className='login-container'>
      <div className='login-box'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="btn">Ingresar</button>
        </form>

        <button
          onClick={() => navigate("/registro")}
          className="register-button"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
