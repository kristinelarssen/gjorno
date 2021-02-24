import React from "react";
import loginImage from "./login-image.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../../pages/home";

function Signup() {
  return (
    <div className="base-container">
      <div className="header">Registrer deg</div>
      <div className="content">
        <div className="image">
          <img id="login-image" src={loginImage} />
        </div>
        <div className="form">
          <div className="form-group">
            <label className="loginLabel" htmlFor="username">
              Brukernavn
            </label>
            <input
              className="loginInput"
              type="text"
              name="username"
              placeholder="Brukernavn"
            ></input>
          </div>
          <div className="form-group">
            <label className="loginLabel" htmlFor="email">
              E-post
            </label>
            <input
              className="loginInput"
              type="email"
              name="username"
              placeholder="E-post"
            ></input>
          </div>
          <div className="form-group">
            <label className="loginLabel" htmlFor="password">
              Passord
            </label>
            <input
              className="loginInput"
              type="password"
              name="password"
              placeholder="Passord"
            ></input>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to={"home"}>
          <button type="button" className="loginBtn">
            Registrer Deg
          </button>
        </Link>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default Signup;
