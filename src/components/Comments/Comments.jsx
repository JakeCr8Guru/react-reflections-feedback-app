import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Input } from "@chakra-ui/core";

const Comments = () => {
  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <Input placeholder="1 - 10" size="lg" isRequired="true" />
      <Link>
        <button>NEXT</button>
      </Link>
    </div>
  );
};

export default Comments;
