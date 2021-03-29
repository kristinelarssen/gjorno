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

  const [error, setError] = useState("");

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

  const checkPassword = (password: string) => {
    const passwordRegex = new RegExp(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
    );
    return passwordRegex.test(password);
  };

  const handleSignup = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUser
  ) => {
    if (data?.password && !checkPassword(data.password)) {
      setError(
        "Password must contain minimum eight characters, both upper case and lower case letters and one number."
      );
      return;
    }
    event.preventDefault();
    const sendSignupRequest = async () => {
      try {
        await axios.post("users/", { ...data }).then((res) => {
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
          <Route path={"/home"} exact component={Home} />
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
              <SignupForm error={error} handleSignup={handleSignup} />
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
