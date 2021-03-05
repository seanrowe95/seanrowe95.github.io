import React, { Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Fragment>
      <div className="container-fluid pr-0 pl-0">
        <div className="App-header">
          <Header className="App-header" />
        </div>
      </div>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </Fragment>
  );
}

export default App;
