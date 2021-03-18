import React from "react";
import IActivity from "../../interfaces/activity";
import "../../styles/activity.css";
import annetImg from "../../images/annet.png";
import turImg from "../../images/tur.png";
import lopingImg from "../../images/loping.png";
import attImg from "../../images/attraksjon.png";

const Activity: React.FC<IActivity> = ({
  id,
  title,
  created,
  description,
  date,
  author,
  genre,
}) => {
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
          <p>{author?.isOrganization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username
              ? `Opprettet av: ${author.user.username}`
              : null}
          </p>
          <p>{author?.isOrganization && <button>Meld deg på!</button>}</p>
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
          <p>{author?.isOrganization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username
              ? `Opprettet av: ${author.user.username}`
              : null}
          </p>
          <p>{author?.isOrganization && <button>Meld deg på!</button>}</p>
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
          <p>{author?.isOrganization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username
              ? `Opprettet av: ${author.user.username}`
              : null}
          </p>
          <p>{author?.isOrganization && <button>Meld deg på!</button>}</p>
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
          <p>{author?.isOrganization ? "Organisasjon" : "Privatperson"}</p>
          <p>
            {author?.user.username
              ? `Opprettet av: ${author.user.username}`
              : null}
          </p>
          <p>{author?.isOrganization && <button>Meld deg på!</button>}</p>
        </div>
      )}
    </>
  );
};

export default Activity;
