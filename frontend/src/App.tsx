import React from "react";
import "./App.css";
import ActivityList from "./components/ActivityList";
import Navbar from "./components/Navbar";
//import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div id="activities">
        <ActivityList />
      </div>
    </div>
  );
}

export default App;
