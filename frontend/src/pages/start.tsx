import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import '../App.css';
//import Navbar from './components/Navbar';
//import Activity from './components/Activity';
//import { render } from '@testing-library/react';
import { Login, Signup } from "../components/Login/index";
import { isPropertySignature } from 'typescript';
//import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

function Start() {

    const [state, setState] = useState(false);
  
    function switchState() {
      setState(prevState => !prevState)
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
              <button type="button" id="button-link" onClick={switchState}>Registrer deg</button>
            ) : (
              <button type="button" id="button-link" onClick={switchState}>Logg inn</button>
            )}
          </a>    
          </div>
      </div>
    )
  }

export default Start