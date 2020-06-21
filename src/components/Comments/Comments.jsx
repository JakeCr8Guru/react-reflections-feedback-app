import React, { useState } from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Grid, Heading, Box, Button, Input } from "@chakra-ui/core";

// Redux imports:
import { connect } from "react-redux";

const Comments = (props) => {

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    // Places each character in an index of an array...
    console.log(input);
  };

  const updateRedux = () => {
    props.dispatch({ type: "ADD_COMMENTS", payload: input });
  };

  return (
    <Grid gridColumn="column">
      <Box mb={8}>
        <Heading as="h1" size="2xl">
          Any comments you want to leave?
        </Heading>
      </Box>
      <Box mt={8}>
        <Input
          onChange={handleChange}
          placeholder="comments"
          size="lg"
        />
      </Box>
      <Box mt={8}>
        <Link to="/review">
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

export default connect()(Comments);
