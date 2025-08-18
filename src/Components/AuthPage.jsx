import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./Styles/AuthPage.css";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page-wrapper">
      <div className="auth-overlay">
       
        <button>Welcome to fitness tracking website</button>
      </div>

      <div className="auth-form-section">
        <div className="auth-toggle-buttons">
          <button
            className={`auth-toggle-button ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`auth-toggle-button ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default AuthPage;
