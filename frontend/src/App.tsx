import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Activity from "./components/Activity";
import axios from "axios";
//import { render } from '@testing-library/react';

function App() {
  const [activities, getActivities] = useState([]);

  const getAllActivities = () => {
    axios
      .get(`http://localhost:8000/activities/`)
      .then((response: any) => {
        const activities = response.data;
        getActivities(activities);
        console.log(activities);
      })
      .catch((error: any) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    getAllActivities();
    {
      activities &&
        activities.length > 0 &&
        activities.map((item) =>
          document.getElementById("activities")?.append(<Activity />)
        );
    }
  }, []);

  return (
    <div className="App">
      <header onClick={getAllActivities}>
        <Navbar />
      </header>
      <div id="activities">
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
    </div>
  );
}

const navigation = {
  brand: { name: "Navbar", to: "/" },
  links: [
    //{name: "???", to: "URL"}
  ],
};

export default App;
