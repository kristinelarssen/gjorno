import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Activity from './components/Activity';
//import { render } from '@testing-library/react';
import { Login, Signup } from "./components/Login/index";
import { isPropertySignature } from 'typescript';

function App() {

  const [state, setState] = useState(false);

  function switchState() {
    setState(prevState => !prevState)
  }

  return (
    <div className="App">
      <div className="switch-state">
            <button type="button" className="btn" onClick={switchState}>Endre state!</button>
        </div>
      <div className="login">
        <div className="container">
          {state && <Login />}
          {!state && <Signup />}

        </div>
      </div>
    </div>
  )
}

/**
const rightRef = useRef()
const RightSide = () => {
  return (<div className="Right-side" onClick={switchState}>
    <div className="text">{(e : any) => e.current}</div>
  </div>

  )
}*/

/**
function RightSide() {
  const rightRef = useRef()

  return (
    <div className="right-side" onClick={}></div>
  )
} */

/*
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div id = "activities">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </div>
  );
}

const navigation = {
  brand: { name: "Navbar", to: "/"},
  links: [
    //{name: "???", to: "URL"}
  ]
}
*/

export default App;

