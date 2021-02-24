import React, { FC, useState } from "react";
import loginImage from "./login-image.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../../pages/home";
import IUser from "../../interfaces/user";
import axios from "axios";

  
function Signup()  {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (data: IUser) => {
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        console.log(data)
        const sendPostRequest = async () => {
          try {
            await axios.post(`http://localhost:8000/users/`, data, config);
          } catch (error) {
            console.error(error);
          }
        };
    
        sendPostRequest();
      };
    
    const handleOnClick = () => {
      const data = {
        username: username,
        email: email,
        password: password,
      };
      handleRegister(data);
    };
    return (
    <div className="base-container">
        <div className="header">Registrer deg</div>
        <div className="content">
            <div className="image">
                <img id="login-image" src={loginImage}/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Brukernavn</label>
                    <input type="text" name="username" placeholder="Brukernavn" value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input type="email" name="username" placeholder="E-post" value={email}
                    onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" placeholder="Passord" value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
            </div>
        </div>
        <div className="footer">
            <Link to={"home"}>
                <button type="button" className="btn" onClick={handleOnClick} >Registrer Deg</button>
            </Link>
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

export default Signup