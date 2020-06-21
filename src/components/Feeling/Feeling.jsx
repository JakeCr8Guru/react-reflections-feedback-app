import React, { useState } from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Grid, Heading, Box, Button, Input } from "@chakra-ui/core";

// Redux imports:
import { connect } from "react-redux";

const Feeling = (props) => {

  const [input, setInput] = useState(0);
  
  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

  const updateRedux = () => {
    props.dispatch({type: 'ADD_FEELING', payload: input})
  }

  return (
    <Grid gridColumn="column">
      <Box mb={8}>
        <Heading as="h1" size="2xl">
          How are you feeling today?
        </Heading>
      </Box>
      <Box mt={8}>
        <Input
          onChange={handleChange}
          placeholder="1 - 10"
          size="lg"
        />
      </Box>
      <Box mt={8}>
        <Link to="/understanding">
          <Button
            onClick={updateRedux}
            variantColor="green"
            variant="outline"
            size="lg"
            height="48px"
            width="200px"
            border="2px"
            rightIcon="arrow-forward"
          >
            NEXT
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

export default connect()(Feeling);
