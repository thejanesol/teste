import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Prices from "./views/Prices";
import Contact from "./views/Contact";

const Routes = () => {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/" exact component={About}/>
        <Route path="/" exact component={Services}/>
        <Route path="/" exact component={Prices}/>
        <Route path="/" exact component={Contact}/>

      </BrowserRouter>
    );
  }

export default Routes;