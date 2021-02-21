import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import Activity from './components/Activity';
//import { render } from '@testing-library/react';
// import { Login, Signup } from "./components/Login/index";
import { isPropertySignature } from 'typescript';
//import {Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import Home from './pages/home';
import Start from './pages/start';



function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={Start}/>
        <Route path={"/home"} exact component={Home}/>
        <Redirect to={"/"} />
      </Switch>
    </Router>
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

