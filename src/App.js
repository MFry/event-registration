import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import Content from "./Content";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div>
    {/*<Appbar><img src={logo} className="App-logo" alt="logo" /></Appbar>*/}
    <Content />
  </div>
);

export default App;
