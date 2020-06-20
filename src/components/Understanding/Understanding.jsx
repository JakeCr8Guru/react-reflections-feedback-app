import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Input } from "@chakra-ui/core";

const Understanding = () => {
  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <Input placeholder="1 - 10" size="lg" isRequired="true" />
      <Link>
        <button>NEXT</button>
      </Link>
    </div>
  );
};

export default Understanding;
