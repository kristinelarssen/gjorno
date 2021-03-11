import React from "react";
import IActivity from "../../interfaces/activity";
import "../../styles/activity.css";

const Activity: React.FC<IActivity> = ({
  id,
  title,
  created,
  description,
  date,
  author,
}) => {
  return (
    <div key={id} className="box">
      <h3>{title}</h3>
      <p id="opprettet">Opprettet: {created}</p>
      <p>{description}</p>
      <p id="dato">Dato og tidspunkt: {date}</p>
      <p>{author?.isOrganization ? "Organisasjon" : "Privatperson"}</p>
      <p>
        {author?.user.username ? `Opprettet av: ${author.user.username}` : null}
      </p>
    </div>
  );
};

export default Activity;
