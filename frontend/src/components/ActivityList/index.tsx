import moment from "moment";
import "moment/locale/nb";
import IActivity from "../../interfaces/activity";
import Activity from "../Activity";

interface Props {
  activities: IActivity[];
}

const ActivityList: React.FC<Props> = ({ activities }) => {
  return (
    <div id="activities">
      {activities &&
        activities.length > 0 &&
        activities.map((item) => (
          <Activity
            key={item.id}
            title={item.title}
            created={moment(item.created).format("Do MMMM YYYY, HH:mm")}
            description={item.description}
            date={moment(item.date).format("Do MMMM YYYY, HH:mm")}
            genre={item.genre}
          />
        ))}
    </div>
  );
};

export default ActivityList;
