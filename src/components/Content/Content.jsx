import React from "react";

// React Router DOM imports:
import { HashRouter as Route } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <h1>Does this work?</h1>
      <Route exact path="/"></Route>
    </div>
  );
};

export default Content;
