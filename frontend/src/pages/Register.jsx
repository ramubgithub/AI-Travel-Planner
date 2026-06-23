import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import "../styles/register.css";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/auth/register", form);

    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">

          <div className="register-header">
            <h2>Create Account</h2>
            <p>Plan your next AI-powered journey</p>
          </div>

          <form
            className="register-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />

            <button
              type="submit"
              className="register-btn"
            >
              Register
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Register;