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
  const [allowRegistration, setAllowRegistration] = useState<boolean>(false);

  const handleOnClick = () => {
    const data = {
      title: title,
      created: new Date(),
      description: description,
      date: new Date(date),
      allowRegistration: allowRegistration,
    };
    handleSubmit(data);
    popup();
  };

  console.log(allowRegistration);

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

      <button className="btn" id="btnExit" onClick={popup}>
        X
      </button>
      <button className="btn" id="btnOk" onClick={handleOnClick}>
        OK
      </button>
      <div className="div" id="divButton">
        <form>
          <label>
            Vil du tillate påmelding?:D
            <input
              name="allowRegistration"
              type="checkbox"
              checked={allowRegistration}
              onChange={() => setAllowRegistration(!allowRegistration)}
            ></input>
          </label>
        </form>
      </div>
    </div>
  );
};

export default NewActivity;
