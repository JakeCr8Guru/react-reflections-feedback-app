import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import { Grid, Heading, Box, Button } from "@chakra-ui/core";

// Redux imports:
import { connect } from "react-redux";

// Axios imports:
import axios from "axios";

const Review = (props) => {

  const feedbackPost = () => {
    const { feeling, understanding, support, comments } = props;
    const feedback = { feeling, understanding, support, comments };
    console.log(feedback);
    axios
      .post("/api/feedback", feedback)
      .then((res) => {
        console.log(res);
        // redirect the user to the confirmation page
        // this.props.history.push("/checkout");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <Grid gridColumn="column">
      <Box mb={4}>
        <Heading as="h1" size="2xl">
          Review Your Feedback
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading as="h3" size="lg">
          Feelings: {props.feeling}
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading as="h3" size="lg">
          Understanding: {props.understanding}
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading as="h3" size="lg">
          Support: {props.support}
        </Heading>
      </Box>
      <Box mb={4}>
        <Heading as="h3" size="lg">
          Comments: {props.comments}
        </Heading>
      </Box>
      <Box mt={4}>
        <Link>
          <Button
            onClick={feedbackPost}
            variantColor="green"
            variant="outline"
            size="lg"
            height="48px"
            width="200px"
            border="2px"
          >
            SUBMIT
          </Button>
        </Link>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    feeling: state.feeling,
    understanding: state.understanding,
    support: state.support,
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(Review);
