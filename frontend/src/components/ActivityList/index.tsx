import { useEffect, useState } from "react";
import axios from "../../axios";
import IActivity from "../../interfaces/activity";
import Activity from "../Activity";

const ActivityList: React.FC = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("activities/");
      setActivities(request.data);
      return;
    }
    fetchData();
  }, []);

  return (
    <div>
      {activities &&
        activities.length > 0 &&
        activities.map((item) => (
          <Activity
            key={item.id}
            title={item.title}
            created={item.created}
            description={item.description}
            date={item.date}
          />
        ))}
    </div>
  );
};

export default ActivityList;
