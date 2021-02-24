import React, { FC, useState } from "react";
import IActivity from "../../interfaces/activity";
import "../../styles/newActivity.css";

interface Props {
  popup: () => void;
  handleSubmit: (data: IActivity) => void;
}

const NewActivity: FC<Props> = ({ popup, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleOnClick = () => {
    const data = {
      title: title,
      created: new Date(),
      description: description,
      date: new Date(date),
    };
    handleSubmit(data);
    popup();
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
        onChange={(event) => setDescription(event.target.value)}
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
      <button className="btn" id="btnOk" onClick={handleOnClick}>
        OK
      </button>
    </div>
  );
};

export default NewActivity;
