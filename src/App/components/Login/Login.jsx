import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Register from '../Register';

let mensajeLogin = '';

const Login = () => {
  if (mensajeLogin) {
    mensajeLogin = 'patata';
  }
  return (
    <Router>
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
          <button type="button" className="button">
            Entrar
          </button>
        </div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Login;
