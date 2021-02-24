import React, { useState } from "react";
import "../App.css";
//import Navbar from './components/Navbar';
//import Activity from './components/Activity';
//import { render } from '@testing-library/react';
import { Login, Signup } from "../components/Login/index";

function Start() {
  const [state, setState] = useState(false);

  function switchState() {
    setState((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {state && <Login />}
          {!state && <Signup />}
        </div>
      </div>
      <div className="switch-state">
        <a>
          {state ? (
            <button type="button" id="button-link" onClick={switchState}>
              Registrer deg
            </button>
          ) : (
            <button type="button" id="button-link" onClick={switchState}>
              Logg inn
            </button>
          )}
        </a>
      </div>
    </div>
  );
}

export default Start;
