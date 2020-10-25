import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./components/navbar-component";

import Home from "./components/home-component";
import Portfolio from "./components/portfolio-component";
import Resume from "./components/resume-component";
import Contact from "./components/contact-component";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
