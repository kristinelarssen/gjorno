import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home";
import Start from "./pages/start";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />  
        <button id = "btnNewAct" onClick={() => {setPopup(!popup)}}>OPPRETT NY AKTIVITET</button>    
      </header>
      <div id="activities">
        <ActivityList />
      </div>
      <div>
        {popup?<NewActivity popup={() => setPopup(!popup)}></NewActivity>: null}
      </div>

      <Router>
        <Switch>
          <Route path={"/home"} exact component={Home} />
          <Route path={"/"} exact component={Start} />
          <Redirect to={"/"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
