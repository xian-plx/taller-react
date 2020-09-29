import React from 'react';
import { Link } from 'react-router-dom';

let mensajeLogin = '';

const Login = () => {
  if (mensajeLogin) {
    mensajeLogin = 'patata';
  }
  return (
    <div className="gridRegister">
      <label htmlFor="user" className="nombre">
        <span>Usuario</span>
        <input className="box" id="user" />
      </label>

      <br />
      <br />

      <label htmlFor="password">
        <span>Contraseña</span>
        <input type="password" className="box" id="password" />
      </label>

      <br />
      <br />
      <span>
        <a href="register">
          <Link to="/register">
            Haz click aquí para crear un nuevo usuario
          </Link>
        </a>
      </span>
      <br />
      <br />
      {/* <p>{{mensajeLogin}}</p> */}
      <div className="botones">
        <Link to="/productList">
          <button type="button" className="button">
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
