import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="card p-4" style={{ width: "350px" }} onSubmit={login}>
        <h4 className="mb-3">Admin Login</h4>
        <input className="form-control mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}
