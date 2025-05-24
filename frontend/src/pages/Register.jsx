import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container py-5" style={{ maxWidth: "400px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Register</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Register
            </button>
          </form>
          <div className="mt-3 text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login">Login here</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
