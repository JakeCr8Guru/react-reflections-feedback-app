import React from "react";

// React Router DOM imports:
import { HashRouter as Router, Route } from "react-router-dom";

// Chakra imports:
import { Flex } from "@chakra-ui/core";

// Component imports:
import Start from "../Start/Start";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Admin from "../Admin/Admin";

// This component holds all the componets of state that have different routes to them.
const Content = () => {
  return (
    <Flex
      bg="gray.50"
      size="500px"
      align="center"
      justify="center"
      color="gray.80"
      borderWidth="1px"
      rounded="lg"
      p={6}
      m={8}
    >
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
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/review">
          <Admin />
        </Route>
      </Router>
    </Flex>
  );
};

export default Content;
