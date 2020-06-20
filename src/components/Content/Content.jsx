import React from "react";

// React Router DOM imports:
import { HashRouter as Router, Route } from "react-router-dom";

// Component imports:
import Start from '../Start/Start';
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";

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
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/supported">
          <Supported />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </Router>
    </div>
  );
};

export default Content;
