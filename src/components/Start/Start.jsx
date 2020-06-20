import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Grid, Heading, Box, Button } from "@chakra-ui/core";

const Start = () => {
  return (
    <Grid gridColumn="column">
      <Box mb={8}>
        <Heading as="h1" size="2xl">
          Start your reflection for the day
        </Heading>
      </Box>
      <Box mt={8}>
        <Link to="/feeling">
          <Button
            variantColor="green"
            variant="outline"
            size="lg"
            height="48px"
            width="200px"
            border="2px"
          >
            Start
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default Start;
