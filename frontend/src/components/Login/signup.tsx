import React from "react";
import loginImage from "./login-image.png";

function Signup() {

    return (
    <div className="base-container">
        <div className="header">Registrer deg</div>
        <div className="content">
            <div className="image">
                <img src={loginImage}/>
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
            <button type="button" className="btn">Registrer Deg!</button>
        </div>
    </div>
    );

}

export default Signup