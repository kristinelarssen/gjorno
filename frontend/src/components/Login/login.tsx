import React from "react";
import loginImage from "../../login-image.png";

export class Login extends React.Component {

    constructor(props : any) {
        super(props)
    }

    render() {
        return <div className="base-container">
            <div className="header">Logg inn</div>
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
                        <label htmlFor="password">Passord</label>
                        <input type="password" name="password" placeholder="Passord"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Logg Inn</button>
            </div>
        </div>
    }

}