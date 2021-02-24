import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Start from "./pages/start";

function App() {
  return (
    <div className="App">
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
