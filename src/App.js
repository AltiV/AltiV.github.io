import React from "react";

import { Route } from "react-router-dom";

import Navbar from "./components/navbar-component";

import Home from "./components/home-component";
import Resume from "./components/resume-component";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;
