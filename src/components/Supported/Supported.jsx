import React, { useState } from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import {
  Grid,
  Heading,
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/core";

// Redux imports:
import { connect } from "react-redux";

const Supported = (props) => {

  const [value, setValue] = useState(0);

  const handleChangeForSlider = (value) => setValue(value);

  const updateRedux = () => {
    props.dispatch({ type: "ADD_SUPPORT", payload: value });
  };

  return (
    <Grid gridColumn="column">
      <Box mb={8}>
        <Heading as="h1" size="2xl">
          How well are you being supported?
        </Heading>
      </Box>
      <Box mt={8}>
        <Slider
          flex="1"
          defaultValue={5}
          min={0}
          max={10}
          value={value}
          onChange={handleChangeForSlider}
        >
          <SliderTrack bg="green.100" />
          <SliderFilledTrack bg="teal.500" />
          <SliderThumb fontSize="sm" width="32px" height="20px">
            <Box color="teal.500" children={value} />
          </SliderThumb>
        </Slider>
      </Box>
      <Box mt={8}>
        <Link to="/comments">
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

export default connect()(Supported);
