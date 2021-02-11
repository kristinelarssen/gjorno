import axios from "axios";
import { useState } from "react";
import Activity from "../Activity";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  const getAllActivities = () => {
    axios
      .get(`http://localhost:8000/activities/`)
      .then((response: any) => {
        const activities = response.data;
        setActivities(activities);
        console.log(activities);
      })
      .catch((error: any) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      {activities &&
        activities.length > 0 &&
        activities.map((item) => <Activity title={item.title} />)}
    </div>
  );
};
