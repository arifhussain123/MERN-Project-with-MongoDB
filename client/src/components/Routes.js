import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Router.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Registration from "./Signup";
import Navbar from "./Navbar";
import ErrorPages from "./ErrorPages";

export default function Routes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Registration} />{" "}
          <Route path="" component={ErrorPages} />
        </Switch>
      </Router>
    </div>
  );
}
