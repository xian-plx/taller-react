import React from 'react';

const Register = () => (
  <div className="Register">
    {/* <h1>Banana</h1> */}
    <div className="gridRegister">
      <p>Crear un nuevo usuario:</p>
      <br />
      <label htmlFor="nameNewUser" className="nombre">
        <span>
          Nombre
          <span className="required">*</span>
        </span>
        <input className="loginBox" id="nameNewUser" />
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
        />
      </label>
      <br />
      <br />
      <span>*Campo requerido</span>
      <div className="botones">
        <button type="button" className="button">
          Ingresar
        </button>
        <button type="button" className="button">
          Volver
        </button>
      </div>
      <p>Usuario creado correctamente</p>
    </div>
  </div>
);

export default Register;
