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
                <img id="login-image" src={loginImage}/>
            </div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Brukernavn</label>
                    <input type="text" name="username" placeholder="Brukernavn"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input type="email" name="username" placeholder="E-post"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" placeholder="Passord"></input>
                </div>
            </div>
        </div>
        <div className="footer">
            <Link to={"home"}>
                <button type="button" className="btn">Registrer Deg</button>
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