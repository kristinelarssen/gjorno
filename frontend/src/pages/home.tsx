import React, { useEffect, useState } from "react";
import axios from "../axios";
//import { render } from '@testing-library/react';
// import { Login, Signup } from "../components/Login/index";
import ActivityList from "../components/ActivityList";
// import './App.css';
import Navbar from "../components/Navbar";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";

function Home() {
  const [popup, setPopup] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("activities/");
      setActivities(request.data);
      return;
    }
    fetchData();
  }, [popup]);

  return (
    <div className="Home">
      <header>
        <Navbar />
        <button
          id="btnNewAct"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          +
        </button>
      </header>
      <div id="activities">
        <ActivityList activities={activities} />
      </div>
      <div>
        {popup ? (
          <NewActivity popup={() => setPopup(!popup)}></NewActivity>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
