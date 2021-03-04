import React, { useEffect, useState } from "react";
import axios from "../axios";
import ActivityList from "../components/ActivityList";
import Navbar from "../components/Navbar";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";

function Home() {
  const [popup, setPopup] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);

  async function fetchData() {
    const request = await axios.get("activities/");
    setActivities(request.data);
    return;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (data: IActivity) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const sendPostRequest = async () => {
      try {
        await axios.post(`activities/`, data, config);
      } catch (error) {
        console.error(error);
      }
    };
    sendPostRequest();
    fetchData();
  };

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
