import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
// import './App.css';
import Navbar from '../components/Navbar';
import Activity from '../components/Activity';
//import { render } from '@testing-library/react';
// import { Login, Signup } from "../components/Login/index";
import { isPropertySignature } from 'typescript';
import ActivityList from '../components/ActivityList';
import NewActivity from '../components/NewActivity';


function Home() {
  const [popup, setPopup] = useState(false);

  return (
    <div className="Home">
      <header>
        <Navbar />
        <button id="btnNewAct" onClick={() => {setPopup(!popup)}}>+</button>
      </header>
      <div id = "activities">
        <ActivityList />
      </div>
      <div>
        {popup?<NewActivity popup={() => setPopup(!popup)}></NewActivity>: null}
      </div>
    </div>
  );
}

const navigation = {
  brand: { name: "Navbar", to: "/home"},
  links: [
    //{name: "???", to: "URL"}
  ]
}

export const setPopup = () => {
  
}

export default Home
