import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Login</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <div className="mt-3 text-center">
            <small>
              Don't have an account?{" "}
              <Link to="/register">Register here</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
