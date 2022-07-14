import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";
import ReactDOM from "react-dom";
import 
function App() {
  return ReactDOM.render(
    <authContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route
            exact
            path="/login"
            render={(props) => <Auth {...props} authRoute="login" />}
          ></Route>
          <Route
            exact
            path="/register"
            render={(props) => <Auth {...props} authRoute="register" />}
          ></Route>
        </Switch>
      </Router>
    </authContextProvider>
      , document.getElementById("root")
  );
}

export default App;
