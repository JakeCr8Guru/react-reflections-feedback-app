import React from "react";

// React Router DOM imports:
import { HashRouter as Route } from "react-router-dom";

// Component imports:
import Start from '../Start/Start';

const Content = () => {
  return (
    <div>
      <Route exact path="/">
        <Start/>
      </Route>
    </div>
  );
};

export default Content;
