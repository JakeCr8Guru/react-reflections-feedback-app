import React from "react";

// React Router DOM imports:
import { Link } from "react-router-dom";

// Chakra imports:
import {
  Grid,
  Heading,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/core";

// Redux imports:
import { connect } from "react-redux";

// Axios imports:
import axios from "axios";

const Review = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClick = () => {
    onOpen();
    feedbackPost();
    props.dispatch({ type: "REST_LOOP", payload: null });
  }

  const feedbackPost = () => {
    const { feeling, understanding, support, comments } = props;
    const feedback = { feeling, understanding, support, comments };
    console.log(feedback);
    axios
      .post("/api/feedback", feedback)
      .then((res) => {
        console.log(res);
        // redirect the user to the confirmation page
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <>
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
          {/* <Link to="/"> */}
          <Button
            onClick={onClick}
            variantColor="green"
            variant="outline"
            size="lg"
            height="48px"
            width="200px"
            border="2px"
          >
            SUBMIT
          </Button>
          {/* </Link> */}
        </Box>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box count={2} />
          </ModalBody>

          <ModalFooter>
            <Link to="/"> 
              <Button variantColor="blue" mr={3}>
                Done
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
