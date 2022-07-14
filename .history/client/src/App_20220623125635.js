import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";
import ReactDOM from "react-dom";
import { authContextProvider } from "../src/contexts/AuthContext";
function App() {
  return ReactDOM.render(
    <authContextProvider>

    </authContextProvider>
    
  );
}

export default App;
