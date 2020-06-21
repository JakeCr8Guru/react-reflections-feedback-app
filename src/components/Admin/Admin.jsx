import React from "react";

// Redux imports:
import { connect } from "react-redux";

// Chakra imports:
import {
  Grid
} from "@chakra-ui/core";

const Admin = (props) => {
  return (
    <>
    <Grid gridColumn="column"></Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    feedback: state.feedback,
  };
};

export default connect(mapStateToProps)(Admin);