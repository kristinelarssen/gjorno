import React, { useState } from "react";
import IUser from "../../interfaces/user";
import loginImage from "../../images/login-image.png";
import { Link } from "react-router-dom";

interface Props {
  handleSignup: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUser
  ) => void;
}

const SignupForm: React.FC<Props> = ({ handleSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="base-container">
      <form>
        <div className="header">Registrer deg</div>
        <div className="content">
          <div className="image">
            <img id="login-image" src={loginImage} alt="login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Brukernavn</label>
              <input
                type="text"
                placeholder="Brukernavn"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">E-post</label>
              <input
                type="email"
                placeholder="E-post"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Passord</label>
              <input
                type="password"
                placeholder="Passord"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            type="submit"
            className="btn"
            onClick={(event) => {
              handleSignup(event, {
                username: username,
                email: email,
                password: password,
              });
            }}
          >
            Registrer deg
          </button>
        </div>
      </form>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default SignupForm;
