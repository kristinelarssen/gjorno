import { stringify } from "querystring";
import { useEffect, useState } from "react";
import axios from "../../axios";
import IActivity from "../../interfaces/activity";
import Activity from "../Activity";
import moment from "moment";
import "moment/locale/nb";

const ActivityList: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    moment.locale("nb");
    async function fetchData() {
      const request = await axios.get("activities/");
      setActivities(request.data);
      return;
    }
    fetchData();
  }, []);



  return (
    <div id = "activities">
      {activities &&
        activities.length > 0 &&
        activities.map((item) => (
          <Activity
            key={item.id}
            title={item.title}
            created={moment(item.created).format("Do MMMM YYYY, H:MM:SS")}
            description={item.description}
            date={moment(item.date).format("Do MMMM YYYY, H:MM:SS")}
          />
        ))}
    </div>
  );
};

export default ActivityList;
