import React, { useEffect, useMemo, useState } from "react";
import { Router, Redirect, Route, Switch, Link } from "react-router-dom";
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

  const config = useMemo(() => {
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    };
  }, []);

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: IUserLogin
  ) => {
    event.preventDefault();
    const sendLoginRequest = async () => {
      try {
        await axios.post("token-auth/", data, config).then((res) => {
          localStorage.setItem("token", res.data.token);
          setAuthenticated(true);
          setUsername(res.data.user.username);
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
        await axios.post("users/", data, config).then((res) => {
          localStorage.setItem("token", res.data.token);
          setAuthenticated(true);
          setUsername(res.data.username);
          history.push("/home");
        });
      } catch (error) {
        console.log(error);
      }
    };
    sendSignupRequest();
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUsername("");
    setAuthenticated(false);
    history.push("/");
  };

  useEffect(() => {
    if (isAuthenticated) {
      try {
        axios.get("current_user/", config).then((res) => {
          setUsername(res.data.username);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [isAuthenticated, config]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <h3>Hello {username}</h3>
          <button onClick={handleLogOut}>Logg ut</button>
        </div>
      ) : (
        <div>
          <h3>Please log in</h3>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
      )}
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
