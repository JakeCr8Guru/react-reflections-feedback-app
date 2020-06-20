import React from "react";

// React Router DOM imports:
import { HashRouter as Router, Route } from "react-router-dom";

// Component imports:
import Start from '../Start/Start';
import Feeling from "../Feeling/Feeling";

const Content = () => {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/feeling">
          <Feeling />
        </Route>
      </Router>
    </div>
  );
};

export default Content;
