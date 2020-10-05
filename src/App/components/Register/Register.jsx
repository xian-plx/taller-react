import React from 'react';
import { useHistory } from 'react-router-dom';
import Client from '../../objects/Client';

const Register = () => {
  let clientList = Client;
  let userName = '';
  let userPass = '';

  if (localStorage.getItem('clientList')) {
    clientList = JSON.parse(localStorage.getItem('clientList'));
  }

  const handleChangeUser = (e) => {
    userName = e.target.value;
  };

  const handleChangePass = (e) => {
    userPass = e.target.value;
  };

  const onChangeText = (value) => {
    document.getElementById('userCreated').innerHTML = value;
  };

  const history = useHistory();
  const handleClick = () => history.push('/login');

  const genID = () => {
    const newId = clientList.length > 0
      ? Math.max(...clientList.map((x) => x.idClient)) + 1
      : 1;
    return newId;
  };

  const createUser = (user, passwd) => {
    let mensaje = '';
    const id = genID();
    const newUser = user.trim();
    const newPasswd = passwd.trim();

    if (!newUser) {
      mensaje = 'Error, debe introducirse un nombre';
      return onChangeText(mensaje);
    }

    if (!newPasswd) {
      mensaje = 'Error, debe introducirse una contraseña';
      return onChangeText(mensaje);
    }

    if (!newUser || !newPasswd || !id) {
      mensaje = 'Ha ocurrido un error, inténtelo de nuevo';
      return onChangeText(mensaje);
    }

    const array = { idClient: id, nombreClient: newUser, pass: newPasswd };

    for (let i = 0; i < clientList.length; i += 1) {
      if (user === clientList[i].nombreClient) {
        mensaje = 'Nombre de usuario no disponible';
        return onChangeText(mensaje);
      }
    }
    clientList.push(array);
    localStorage.setItem('clientList', JSON.stringify(clientList));
    mensaje = 'Usuario creado correctamente';
    return onChangeText(mensaje);
  };

  return (
    <div className="Register">
      {/* <h1>Banana</h1> */}
      {/* <p></p> */}
      <div className="gridRegister">
        <p>Crear un nuevo usuario:</p>
        <br />
        <label htmlFor="nameNewUser" className="nombre">
          <span>
            Nombre
            <span className="required">*</span>
          </span>
          <input
            className="loginBox"
            id="nameNewUser"
            onChange={handleChangeUser}
          />
        </label>
        <br />
        <br />
        <label htmlFor="passwordNewUser" className="contra">
          <span>
            Contraseña
            <span className="required">*</span>
          </span>
          <input
            type="password"
            className="loginBox"
            id="passwordNewUser"
            onChange={handleChangePass}
          />
        </label>
        <br />
        <br />
        <span>*Campo requerido</span>
        <div className="botones">
          <button
            type="button"
            className="button"
            onClick={() => createUser(userName, userPass)}
          >
            Ingresar
          </button>
          <button
            type="button"
            className="button"
            onClick={handleClick}
          >
            Volver
          </button>
        </div>
        <p id="userCreated" />
      </div>
    </div>
  );
};

export default Register;
