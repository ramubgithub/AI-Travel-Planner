import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/auth.css";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.data.token
      );

      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-card">

          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>
              Sign in to continue your travel journey
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;