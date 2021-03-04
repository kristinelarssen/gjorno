import React, { useState } from "react";
import IUserLogin from "../../interfaces/userlogin";
import "../../styles/login.css";
import loginImage from "../../images/login-image.png";
import { Link } from "react-router-dom";

interface Props {
  handleLogin: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUserLogin
  ) => void;
}

const LoginForm: React.FC<Props> = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="base-container">
      <div className="header">Logg inn</div>
      <div className="content">
        <div className="image">
          <img id="login-image" src={loginImage} alt="login" />
        </div>
        <form>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Brukernavn</label>
              <input
                type="text"
                name="username"
                placeholder="Brukernavn"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Passord</label>
              <input
                type="password"
                name="password"
                placeholder="Passord"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
          </div>

          <div className="footer">
            <button
              type="submit"
              className="btn"
              onClick={(event) =>
                handleLogin(event, { username: username, password: password })
              }
            >
              Logg inn
            </button>
          </div>
        </form>
      </div>
      <Link to="/signup">
        <button>Signup</button>
      </Link>
    </div>
  );
};

export default LoginForm;
