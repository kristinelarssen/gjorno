import React, { useEffect, useState } from "react";
import axios from "../axios";
import ActivityList from "../components/ActivityList";
import NewActivity from "../components/NewActivity";
import IActivity from "../interfaces/activity";
import IAuthor from "../interfaces/author";
import "./../App.css";

function ActivityLog() {
  const [currentUser, setCurrentUser] = useState<IAuthor>();
  const [activities, setActivities] = useState<IActivity[]>([]);
  let activitiesToShow = activities;

  return (
    <div>
      <h2>Din Aktivitetslogg</h2>
      <div id="activities">
        {currentUser && (
          <ActivityList
            currentUser={currentUser}
            activities={activitiesToShow}
          />
        )}
      </div>
    </div>
  );
}

export default ActivityLog;
