import React from "react";
import IActivity from "../../interfaces/activity";
import "../../styles/activity.css";

const Activity: React.FC<IActivity> = ({
  id,
  title,
  created,
  description,
  date,
}) => {
  return (
    <div key={id} className="box">
      <h3>{title}</h3>
      <p>{description}</p>
      <p id="dato">Dato og tidspunkt: {date}</p>
      <p id="opprettet">Opprettet: {created}</p>
    </div>
  );
};

export default Activity;
