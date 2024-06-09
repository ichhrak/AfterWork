import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./login.css";

export default function Login() {
  const { t } = useTranslation(); // Hook to access translations
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded access credentials
    const customerEmail = "customer";
    const cpPassword = "password";
    const posterEmail = "poster";

    if (email == customerEmail && password == cpPassword) {
      setSuccessMessage(t("login_success"));
      setTimeout(() => {
        navigate("/Customer");
      }, 1000);
    } else if (email == posterEmail && password == cpPassword)  {
      setSuccessMessage(t("login_success"));
      setTimeout(() => {
        navigate("/Poster");
      }, 1000);
    }
    else {
      setErrorMessage(t("invalid_credentials"));
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">{t("login")}</span>
      <form className="loginForm">
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
        <button className="loginButton" onClick={handleLogin}>
          {t("login")}
        </button>
      </form>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
      {successMessage && <p className="successMessage">{successMessage}</p>}
    </div>
  );
}
