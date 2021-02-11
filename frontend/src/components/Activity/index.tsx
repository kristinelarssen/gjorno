import React from "react";
import "../../styles/activity.css";

interface Props {
  title?: string;
}

const Activity = ({ title }: Props) => {
  return (
    <div className="box">
      <h3>{title ? title : "Tittel"}</h3>
      <p>Beskrivelse kommer her</p>
      <p>Dato</p>
    </div>
  );
};

export default Activity;
