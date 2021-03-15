import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useEffect, useState } from "react";
import { reduceEachTrailingCommentRange } from "typescript";
import axios from "../axios";
import ActivityList from "../components/ActivityList";
import Navbar from "../components/Navbar";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";
import IAuthor from "../interfaces/author";
import "./../App.css";

function Home() {
  const [popup, setPopup] = useState(false);
  const [activities, setActivities] = useState<IActivity[]>([]);
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
          { ...data, author: author },
          { headers: { Authorization: `JWT ${localStorage.getItem("token")}` } }
        );
        fetchData();
      } catch (error) {
        console.error(error);
      }
    };
    sendPostRequest();
  };

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
              user: {
                id: res.data[0].user.id,
                username: res.data[0].user.username,
                email: res.data[0].user.email,
              },
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

  return (
    <div className="App">
      <header>
        <Navbar />
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
