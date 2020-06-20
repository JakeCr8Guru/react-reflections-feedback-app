import React from "react";

// React Router DOM imports:
import { HashRouter as Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Start your reflection for the day</h1>
      <Link>
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Start;
