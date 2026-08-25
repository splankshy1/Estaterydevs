import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [account, setAccount] = useState(
    localStorage.getItem("rememberedAccount") || ""
  );
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(
    Boolean(localStorage.getItem("rememberedAccount"))
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!account.trim() || !password.trim()) {
      return;
    }

    if (rememberMe) {
      localStorage.setItem("rememberedAccount", account);
    } else {
      localStorage.removeItem("rememberedAccount");
    }

    console.log("Login form submitted");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Sign In</h1>

        <p className="login-subtitle">
          Please enter your information to proceed with login.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Account"
              className="error-input"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            />

            <p className="error-message">
              ⚠ Unknown Email Address. Check Again Or Try Your Username.
            </p>
          </div>

          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              type="button"
              className="show-password"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                // Open eye - password is visible
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                // Eye with slash - password is hidden
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3L21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.6 5.2C11.05 5.07 11.52 5 12 5C18.5 5 22 12 22 12C22 12 20.8 14.4 18.6 16.2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.2 6.2C3.5 8.1 2 12 2 12C2 12 5.5 19 12 19C13.45 19 14.77 18.7 15.95 18.25"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.88 9.88C9.33 10.43 9 11.18 9 12C9 13.66 10.34 15 12 15C12.82 15 13.57 14.67 14.12 14.12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <span>Remember Me</span>
            </label>

            <a href="#forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>

        <p className="register-text">
          Not a member yet?{" "}
          <a href="#register">Register Now</a>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;