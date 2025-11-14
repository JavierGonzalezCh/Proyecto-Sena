import "./registro.css" //
import React, { useState } from 'react';
const Registro = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="header-section">
          <h1 className="main-title">Bienvenido</h1>
          <p className="subtitle">Accede al centro de gestión de tu empresa</p>
        </div>
        <form id="kc-form-login" action="${url.loginAction}" method="post" className="login-form">
          <div className="form-group">
            <label for="username" className="form-label">
              <svg className="label-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Usuario o correo electrónico
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-input"
              placeholder="ejemplo@correo.com"
              autofocus
              required
              autocomplete="username"
            />
          </div>
          <div className="form-group">
            <label for="password" className="form-label">
              <svg className="label-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Contraseña
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                name="password"
                type="password"
                className="form-input password-input"
                placeholder="••••••••"
                required
                autocomplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                aria-label="Mostrar contraseña"
                onclick="togglePassword()"
              >

                <svg id="eye-icon" className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <svg id="eye-off-icon" className="toggle-icon hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </button>
            </div>
          </div>
          <button id="kc-login" type="submit" className="btn-primary">
            <span className="btn-text">Iniciar sesión</span>
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <a href="">Olvidaste tu contraseña</a>
        </form>
      </div>
    </div>
  );
};

export default Registro;




