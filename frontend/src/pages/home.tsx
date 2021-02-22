import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
// import './App.css';
import Navbar from '../components/Navbar';
import Activity from '../components/Activity';
//import { render } from '@testing-library/react';
// import { Login, Signup } from "../components/Login/index";
import { isPropertySignature } from 'typescript';


function Home() {
  return (
    <div className="Home">
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
  brand: { name: "Navbar", to: "/home"},
  links: [
    //{name: "???", to: "URL"}
  ]
}

export default Home