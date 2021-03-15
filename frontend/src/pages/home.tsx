import React, { useEffect, useState } from "react";
import axios from "../axios";
import ActivityList from "../components/ActivityList";
import Navbar from "../components/Navbar";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";
import "./../App.css";

function Home() {
  const [popup, setPopup] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);

  async function fetchData() {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
    const request = await axios.get("activities/", config);
    setActivities(request.data);
    return;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (data: IActivity) => {
    const sendPostRequest = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      };
      try {
        await axios.post(`activities/`, data, config);
        fetchData();
      } catch (error) {
        console.error(error);
      }
    };
    sendPostRequest();
  };

  return (
    <div className="App">
      <header>
        <button
          id="btnNewAct"
          onClick={() => {
            setPopup(!popup);
          }}
        >
          OPPRETT NY AKTIVITET
        </button>
      </header>
      <div id="activities">
        <ActivityList activities={activities} />
      </div>
      <div>
        {popup ? (
          <NewActivity
            popup={() => {
              setPopup(!popup);
            }}
            handleSubmit={handleSubmit}
          ></NewActivity>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
