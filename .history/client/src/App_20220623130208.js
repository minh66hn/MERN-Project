import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";
import ReactDOM from "react-dom";
import AuthContextProvider from "./contexts/AuthContext";
function App() {
  return ReactDOM.render(
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
      </Router>,
    document.getElementById("root")
    <Auth
  );
}

export default App;
