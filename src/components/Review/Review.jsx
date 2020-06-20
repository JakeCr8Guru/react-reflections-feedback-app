import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:

const Review = () => {
  return (
    <div>
      <h1>Review Your Feedback</h1>
      <h2>Feelings: 0</h2>
      <h2>Understanding: 0</h2>
      <h2>Support: 0</h2>
      <h2>Comments: I have a comment...</h2>
      <Link>
        <button>SUBMIT</button>
      </Link>
    </div>
  );
};

export default Review;
