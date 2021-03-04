import React, { useEffect, useState } from "react";
import { Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./pages/home";
import axios from "./axios";
import IUserLogin from "./interfaces/userlogin";
import history from "./history";

function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setAuthenticated] = useState<boolean>(
    localStorage.getItem("token") ? true : false
  );

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUserLogin
  ) => {
    event.preventDefault();
    const sendLoginRequest = async () => {
      try {
        await axios
          .post("token-auth/", data, config)
          .then((res) => JSON.parse(res.data))
          .then((json) => {
            console.log(json);
            localStorage.setItem("token", json.token);
            console.log(json.token);
            setAuthenticated(true);
            console.log(isAuthenticated);
            setUsername(json.user.username);
            history.push("/home");
          });
      } catch (error) {
        console.log(error);
      }
    };
    sendLoginRequest();
  };

  const handleSignup = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUserLogin
  ) => {
    event.preventDefault();
    const sendSignupRequest = async () => {
      try {
        await axios
          .post("users/", data, config)
          .then((res) => JSON.parse(res.data))
          .then((json) => {
            console.log(json);
            localStorage.setItem("token", json.token);
            setAuthenticated(true);
            setUsername(json.username);
            history.push("/login");
          });
      } catch (error) {
        console.log(error);
      }
    };
    sendSignupRequest();
  };

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("current_user/", {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => JSON.parse(res.data))
        .then((json) => {
          console.log(json);
          setUsername(json.username);
        });
    }
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path={"/home"} exact component={Home} />
          <Route path={"/login"} exact>
            <LoginForm handleLogin={handleLogin} />
          </Route>
          <Route path={"/signup"} exact>
            <SignupForm handleSignup={handleSignup} />
          </Route>
          <Route path={"/"} exact>
            <Redirect to={"/signup"} />
          </Route>
        </Switch>
      </Router>
      <h3>{isAuthenticated ? `Hello ${username}` : "Please Log In"}</h3>
    </div>
  );
}

export default App;
