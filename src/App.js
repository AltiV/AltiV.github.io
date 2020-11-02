import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./components/navbar-component";
import Footer from "./components/footer-component";

import Home from "./components/home-component";
import Portfolio from "./components/portfolio-component";
import Resume from "./components/resume-component";
import Contact from "./components/contact-component";

import { Toolbar } from "@material-ui/core";

function App() {
  return (
    <>
      <Navbar />
      <Toolbar></Toolbar>
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </>
  );
}

export default App;
