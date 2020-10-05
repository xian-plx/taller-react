import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Client from '../../objects/Client';

const Login = () => {
  //   let mensajeLogin = '';
  let clients = Client;
  let clientSession = 0;
  //   const [userName, setUserName] = useState('');
  //   const [firstName, setFirstName] = useState('');
  let userName = '';
  let userPass = '';
  //   const [mensajeLogin, onChangeText] = React.useState((text) => { text });

  if (localStorage.getItem('clientList')) {
    clients = JSON.parse(localStorage.getItem('clientList'));
  }

  const onChangeText = (value) => {
    document.getElementById('mensajeLogin').innerHTML = value;
    // });
  };

  //   const handleChange = (event) => { setUserName(event.target.value); };

  const handleChangeUser = (e) => {
    // console.log(e.target.value);
    userName = e.target.value;
  };

  const handleChangePass = (e) => {
    userPass = e.target.value;
  };

  const history = useHistory();
  const handleClick = () => history.push('/productList');

  const iniciarSesion = (user, passwd) => {
    let mensaje = '';
    for (let i = 0; i < clients.length; i += 1) {
      //   console.log("nombre de cliente en la base de datos " + clients[i].nombreClient);
      if (user === clients[i].nombreClient) {
        if (passwd === clients[i].pass) {
          //   console.log("pass de cliente en la base de datos " + clients[i].pass);
          clientSession = clients[i].idClient;
          localStorage.setItem('clientSession', clientSession);
          //   correctLogin = true;
          handleClick();
          break;
        } else {
          mensaje = 'Contraseña incorrecta';
          onChangeText(mensaje);
          //   console.log(mensajeLogin);
          return mensaje;
        }
      } else if (user === undefined || user === '') {
        // console.log(user);
        mensaje = 'Introduce un usuario';
        // onChangeText(mensaje);
      } else {
        // console.log(user);
        mensaje = 'Usuario incorrecto';
        // onChangeText(mensaje);
      }
    }
    // console.log(mensaje);
    onChangeText(mensaje);
    return mensaje;
  };

  return (
    <div className="gridRegister">
      <label htmlFor="user" className="nombre">
        <span>Usuario</span>
        <input
          className="box"
          id="user"
          name="userName"
          onChange={handleChangeUser}
        />
      </label>

      <br />
      <br />

      <label htmlFor="password">
        <span>Contraseña</span>
        <input
          type="password"
          className="box"
          id="password"
          onChange={handleChangePass}
        />
      </label>

      <br />
      <br />
      <span>
        <Link to="/register">
          Haz click aquí para crear un nuevo usuario
        </Link>
      </span>
      <br />
      <br />
      {/* <p value={mensajeLogin} /> */}
      <p className="mensajeLogin" id="mensajeLogin" />
      <div className="botones">
        {/* <Link to="/productList"> */}
        <button
          type="button"
          className="button"
          onClick={() => iniciarSesion(userName, userPass)}
        >
          Entrar
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Login;
