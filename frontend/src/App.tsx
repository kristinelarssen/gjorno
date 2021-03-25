import React, { useCallback, useEffect, useState } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import axios from "./axios";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import history from "./history";
import loginImage from "./images/login-image.png";
import IUser from "./interfaces/user";
import IUserLogin from "./interfaces/userlogin";
import Home from "./pages/home";

function App() {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    is_organization: false,
  });
  const [isAuthenticated, setAuthenticated] = useState<boolean>(
    localStorage.getItem("token") ? true : false
  );

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUserLogin
  ) => {
    event.preventDefault();
    const sendLoginRequest = async () => {
      try {
        await axios
          .post("token-auth/", data, {
            headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setAuthenticated(true);
            history.push("/home");
          });
      } catch (error) {
        console.log(error);
      }
    };
    sendLoginRequest();
    getCurrentUser();
  };

  const handleSignup = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUser
  ) => {
    event.preventDefault();
    const sendSignupRequest = async () => {
      try {
        await axios
          .post("users/", { ...data, is_organization: true })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setAuthenticated(true);
            history.push("/home");
          });
      } catch (error) {
        console.log(error);
      }
    };
    sendSignupRequest();
    getCurrentUser();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser({ username: "", email: "", is_organization: false });
    setAuthenticated(false);
    history.push("/");
  };

  const getCurrentUser = useCallback(async () => {
    try {
      axios
        .get("userprofiles/", {
          headers: { Authorization: `JWT ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(res);
          res.data[0] &&
            setUser({
              username: res.data[0].user.username,
              email: res.data[0].user.email,
              is_organization: res.data[0].is_organization,
            });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      getCurrentUser();
    }
  }, [getCurrentUser, isAuthenticated]);

  console.log(user);

  return (
    <div className="App">
      <div id="navbar">
        <h1 className="text">GjørNo'</h1>

        {isAuthenticated && (
          <div id="user">
            <p className="text" id="username">
              Hello {user?.username}
            </p>
            <button id="btnLogOut" onClick={handleLogOut}>
              Logg ut
            </button>
          </div>
        )}
        <div>
          <img id="imgLogo" src={loginImage} alt="Logo"></img>
        </div>
      </div>
      <Router history={history}>
        <Switch>
          <Route path={"/home"}>
            <Home user={user} />
          </Route>
          <Route path={"/login"} exact>
            {isAuthenticated ? (
              <Redirect to={"/home"} />
            ) : (
              <LoginForm handleLogin={handleLogin} />
            )}
          </Route>
          <Route path={"/signup"} exact>
            {isAuthenticated ? (
              <Redirect to={"/home"} />
            ) : (
              <SignupForm handleSignup={handleSignup} />
            )}
          </Route>
          <Route path={"/"} exact>
            {isAuthenticated ? (
              <Redirect to={"/home"} />
            ) : (
              <Redirect to={"/signup"} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
