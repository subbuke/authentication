import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{isSignUp ? "Sign Up" : "Log In"}</h2>
        <form className="auth-form">
          {isSignUp && (
            <div>
              <label className="auth-label">Full Name</label>
              <input className="auth-input" type="text" placeholder="Enter your name" required />
            </div>
          )}
          <div>
            <label className="auth-label">Email</label>
            <input className="auth-input" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="auth-label">Password</label>
            <input className="auth-input" type="password" placeholder="Enter your password" required />
          </div>
          <button className="auth-button" type="submit">
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="auth-switch-text">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            className="auth-switch-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
