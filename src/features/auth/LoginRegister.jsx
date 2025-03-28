import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginRegister.css';
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {


  const [action, setAction] = useState('');
  const registerLink = () => {
    setAction(' active');
  };
  const loginLink = () => {
    setAction('');
  };

  return (
  <div className={`wrapper${action}`}>
    <div className="form-box login">
      <form action="">
        <h1>Acceso</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>recordar contraseña</label>
          <a href="#">Olvidaste tu contraseña?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>No tienes una cuenta?<a href="#" onClick={registerLink}> Registrate</a></p>
        </div>
      </form>
    </div>

    <div className="form-box register">
      <form action="">
        <h1>Registro</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>acepto terminos & condiciones</label>
        </div>
        <button type="submit">Registrarme</button>
        <div className="register-link">
          <p>Tienes una cuenta?<a href="#" onClick={loginLink}> accesa</a></p>
        </div>
      </form>
    </div>
  </div>
  );
};
export default Login;
