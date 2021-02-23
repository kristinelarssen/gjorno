import React, { FC, useState } from "react";
import axios from "../../axios";
import "../../styles/newActivity.css";

interface Props {
  popup: () => void;
}

const NewActivity: FC<Props> = ({ popup }) => {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    const data = {
      title: title,
      created: new Date(),
      description: description,
      date: new Date(date),
    };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const sendPostRequest = async () => {
      try {
        axios.post(`activities/`, data, config);
      } catch (error) {
        console.error(error);
      }
    };

    sendPostRequest();
  };

  return (
    <div className="popUp">
      <h3 id="tittel">Ny aktivitet</h3>
      <label>Tittel:</label>
      <input
        name="title"
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <label>Beskrivelse:</label>
      <textarea
        name="description"
        className="input"
        value={description}
        onChange={(event) => setDes(event.target.value)}
      />
      <br />
      <label>Dato:</label>
      <input
        name="date"
        className="input"
        type="datetime-local"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button className="btn" id="btnExit" onClick={popup}>
        X
      </button>
      <button
        className="btn"
        id="btnOk"
        onClick={() => {
          handleSubmit();
          popup();
        }}
      >
        OK
      </button>
    </div>
  );
};

export default NewActivity;
