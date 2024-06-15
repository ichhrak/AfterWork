import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./login.css";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(t("login_success"));
        setTimeout(() => {
          if (email === 'customer') {
            navigate("/Customer");
          } else if (email === 'poster') {
            navigate("/Poster");
          }
        }, 1000);
      } else {
        setErrorMessage(t("invalid_credentials"));
      }
    } catch (error) {
      setErrorMessage(t("error_occurred"));
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">{t("login")}</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>{t("email")}</label>
        <input
          className="loginInput"
          type="text"
          placeholder={t("enter_email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{t("password")}</label>
        <input
          className="loginInput"
          type="password"
          placeholder={t("enter_password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit">
          {t("login")}
        </button>
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
}
