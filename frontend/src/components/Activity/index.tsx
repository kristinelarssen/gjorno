import axios from "../../axios";
import React, { useState } from "react";
import annetImg from "../../images/annet.png";
import attImg from "../../images/attraksjon.png";
import lopingImg from "../../images/loping.png";
import turImg from "../../images/tur.png";
import IActivity from "../../interfaces/activity";
import "../../styles/activity.css";

const Activity: React.FC<IActivity> = ({
  id,
  title,
  created,
  description,
  date,
  author,
  genre,
}) => {
  const [isParticipating, setIsParticipating] = useState<boolean>(false);

  const addParticipant = () => {
    const sendPostRequest = async () => {
      try {
        console.log("activty_id", id);
        console.log("author_id", author?.id);
        id &&
          author &&
          (await axios
            .patch(
              `activities/${id}/`,
              { activity_id: id, user_profile_id: author.id },
              {
                headers: {
                  Authorization: `JWT ${localStorage.getItem("token")}`,
                },
              }
            )
            .then(() => setIsParticipating(true)));
      } catch (error) {
        console.error(error);
      }
    };
    sendPostRequest();
  };

  return (
    <>
      {genre === "Annet" && (
        <div key={id} className="box" id="annetBox">
          <div className="imgRight">
            <img id="icon" src={annetImg} alt="login" />
          </div>
          <h3>{title}</h3>
          <p id="opprettet">Opprettet: {created}</p>
          <p>{description}</p>
          <p id="dato">Dato og tidspunkt: {date}</p>
          <p>{author?.is_organization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username && `Opprettet av ${author.user.username}`}
          </p>
          <p>
            {author?.is_organization && (
              <button className="activity-button" onClick={addParticipant}>
                {isParticipating ? "Påmeldt" : "Meld deg på!"}
              </button>
            )}
          </p>
        </div>
      )}
      {genre === "Tur" && (
        <div key={id} className="box" id="turBox">
          <div className="imgRight">
            <img id="icon" src={turImg} alt="login" />
          </div>
          <h3>{title}</h3>
          <p id="opprettet">Opprettet: {created}</p>
          <p>{description}</p>
          <p id="dato">Dato og tidspunkt: {date}</p>
          <p>{author?.is_organization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username && `Opprettet av ${author.user.username}`}
          </p>
          <p>
            {author?.is_organization && (
              <button className="activity-button" onClick={addParticipant}>
                {isParticipating ? "Påmeldt" : "Meld deg på!"}
              </button>
            )}
          </p>
        </div>
      )}
      {genre === "Løping" && (
        <div key={id} className="box" id="lopingBox">
          <div className="imgRight">
            <img id="icon" src={lopingImg} alt="login" />
          </div>
          <h3>{title}</h3>
          <p id="opprettet">Opprettet: {created}</p>
          <p>{description}</p>
          <p id="dato">Dato og tidspunkt: {date}</p>
          <p>{author?.is_organization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username && `Opprettet av ${author.user.username}`}
          </p>
          <p>
            {author?.is_organization && (
              <button className="activity-button" onClick={addParticipant}>
                {isParticipating ? "Påmeldt" : "Meld deg på!"}
              </button>
            )}
          </p>
        </div>
      )}
      {genre === "Attraksjon" && (
        <div key={id} className="box" id="attraksjonBox">
          <div className="imgRight">
            <img id="icon" src={attImg} alt="login" />
          </div>
          <h3>{title}</h3>
          <p id="opprettet">Opprettet: {created}</p>
          <p>{description}</p>
          <p id="dato">Dato og tidspunkt: {date}</p>
          <p>{author?.is_organization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username && `Opprettet av ${author.user.username}`}
          </p>
          <p>
            {author?.is_organization && (
              <button className="activity-button" onClick={addParticipant}>
                {isParticipating ? "Påmeldt" : "Meld deg på!"}
              </button>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Activity;
