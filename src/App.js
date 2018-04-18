import React, { Component } from "react";
import Container from "muicss/lib/react/container";
import Appbar from "muicss/lib/react/appbar";
import Content from "./Content";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div>
    <Appbar>
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </Appbar>
    <Container>
      <Content />
    </Container>
  </div>
);

export default App;
