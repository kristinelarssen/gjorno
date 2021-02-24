import React, { FC, useState } from "react";
import loginImage from "./login-image.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../../styles/login.css"
import Home from "../../pages/home";
import axios from "axios";
import IUserLogin from "../../interfaces/userlogin";



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let isAuth = false;

    const handleRegister = (data: IUserLogin) => {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        console.log(data)
        const sendPostRequest = async () => {
          try {
            await axios.post(`http://localhost:8000/auth/`, data, config).then(()=>{isAuth=true});
          } catch (error) {
            console.error(error);
          }
        };
    
        sendPostRequest();
      };



    const handleOnClick = () => {
      const data = {
        username: username,
        password: password,
      };
      handleRegister(data);
    };
    return (
    <div className="base-container">
        <div className="header">Logg inn</div>
        <div className="content">
            <div className="image">
                <img id ="login-image" src={loginImage}/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Brukernavn</label>
                    <input type="text" name="username" placeholder="Brukernavn" value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" placeholder="Passord" value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn" onClick={handleOnClick} > Logg Inn</button>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home}> 
                    
                    </Route>
                </Switch>
            </Router>
            
        </div>
    </div>
    );
}

export default Login