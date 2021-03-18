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
  const [acfilter, setAcfilter] = useState("Alle");
  const [allAcFilter, setAllAcFilter] = useState("Alle");

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

  let activitiesToShow = activities;

  if (acfilter !== "Alle") {
    activitiesToShow = activities.filter((item) => item.genre === acfilter);
  }

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

      <div id="filter-container">
        <div id="filterbox">
          <label>Hvem sine aktiviteter vil du se?</label>
          <br />
          <select
            onChange={(event) => {
              setAllAcFilter(event.target.value);
            }}
          >
            <option value="Alle">Alle</option>
            <option value="Mine">Mine</option>
          </select>
        </div>
        <div id="filterbox">
          <label>Hvilke aktiviteter vil du se?</label>
          <br />
          <select
            onChange={(event) => {
              setAcfilter(event.target.value);
            }}
          >
            <option value="Alle">Alle</option>
            <option value="Annet">Annet</option>
            <option value="Tur">Tur</option>
            <option value="Løping">Løping</option>
            <option value="Attraksjon">Attraksjon</option>
          </select>
        </div>
      </div>
      <div id="activities">
        <ActivityList activities={activitiesToShow} />
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
