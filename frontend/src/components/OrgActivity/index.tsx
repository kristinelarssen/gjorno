import axios from "axios";
import React from "react";
import IActivity from "../../interfaces/activity";
import "../../styles/activity.css";

const OrgActivity: React.FC<IActivity> = ({
  id,
  title,
  created,
  description,
  date,
  /** 
  const handleAddUser = () => {
      try {
        const userToAdd = await axios.post('users/')
      } catch (error) {
          
      }
  }*/
}) => {
  return (
    <div key={id} className="box">
      <h3>{title}</h3>
      <p id="opprettet">Opprettet: {created}</p>
      <p>{description}</p>
      <p id="dato">Dato og tidspunkt: {date}</p>
      <button className="btn">Meld deg på!</button>
    </div>
  );
};

export default OrgActivity;
