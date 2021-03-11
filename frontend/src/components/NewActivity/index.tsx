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
  const [genre, setGenre] = useState("");

  const handleOnClick = () => {
      const data = {
      title: title,
      created: new Date(),
      description: description,
      date: new Date(date),
      genre: genre
    };
    handleSubmit(data);
    popup();
  };

  return (
    <div className="popUp">
      <h3 id="tittel">Ny aktivitet</h3>
      <div className="div">
        <label className="label">Tittel:</label>
        <input
          name="title"
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <br />
      <div className="div">
        <label className="label">Beskrivelse:</label>
        <textarea
          name="description"
          className="input"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <br />
       <div className="div">
        <label className="label">Sjanger</label>
        <select className="input" onChange={(event) => setGenre(event.target.value)}>
            <option value="Annet">Annet</option>
            <option value="Spasertur">Spasertur</option>
            <option value="Løping">Løping</option>
        </select>
      </div>
      <br />
      <div className="div" id="divDato">
        <label className="label">Dato:</label>
        <input
          name="date"
          className="input"
          type="datetime-local"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <br />
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
