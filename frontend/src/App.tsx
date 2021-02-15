import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Activity from './components/Activity';
import NewActivity from './components/NewActivity';
//import { render } from '@testing-library/react';



function App() {

  
  return (
    <div className="App">
      <header>
        <Navbar />  
        <button id = "btnNewAct" onClick={togglePopup}>+</button>    
      </header>
      <div id = "activities">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
      <div>
        
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
function togglePopup(){
  return (
    <NewActivity isVisible = {true} ></NewActivity>
  )
}


export default App;
