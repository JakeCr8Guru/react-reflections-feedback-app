import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1>Start your reflection for the day</h1>
      <Link to="/feeling">
        <button>Start</button>
      </Link>
    </div>
  );
};

export default Start;
