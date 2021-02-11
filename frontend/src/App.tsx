import React, { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Activity from './components/Activity';
//import { render } from '@testing-library/react';

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


export default App;
