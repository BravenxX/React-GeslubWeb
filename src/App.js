import React, { Fragment, useEffect } from "react";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";

import { Login } from "./containers";

const App = () => {
  useEffect(() => {
    // Inizializa  Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
};

export default App;
