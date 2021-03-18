import React, { useEffect, useState } from "react";
import axios from "../axios";
import ActivityList from "../components/ActivityList";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";
import IAuthor from "../interfaces/author";
import "./../App.css";

function Home() {
  const [popup, setPopup] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);

  const [acfilter, setAcfilter] = useState("Alle");
  const [allAcFilter, setAllAcFilter] = useState("Alle");

  const [author, setAuthor] = useState<IAuthor>();

  async function fetchData() {
    const request = await axios.get("activities/", {
      headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
    });
    setActivities(request.data);
    return;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (data: IActivity) => {
    const sendPostRequest = async () => {
      try {
        console.log(author);
        await axios.post(
          `activities/`,
          { ...data, author: author?.id },
          { headers: { Authorization: `JWT ${localStorage.getItem("token")}` } }
        );
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

  const getAuthor = async () => {
    try {
      await axios
        .get("userprofiles/", {
          headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          if (res.data[0]) {
            setAuthor({
              id: res.data[0].id,
              isOrganization: res.data[0].is_organization,
              user: res.data[0].user.id,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAuthor();
  }, []);

  console.log(author);
  let activitiesToShow = activities;

  let showMyActivites = activities;

  if (allAcFilter !== "Alle") {
    showMyActivites = activities.filter(
      (item) => item.author?.user.username === "johanne"
    );
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
