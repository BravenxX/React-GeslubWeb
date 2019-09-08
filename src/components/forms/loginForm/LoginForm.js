import React, { Fragment } from "react";

const LoginForm = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Correo electronico</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate " />
          <label for="password">Contraseña</label>
        </div>
      </div>

      <button
        className="btn waves-effect blue waves-light"
        type="submit"
        name="action"
      >
        Submit
        <i class="material-icons right">send</i>
      </button>
    </Fragment>
  );
};

export { LoginForm };
