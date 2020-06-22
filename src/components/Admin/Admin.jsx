import React from "react";

// Redux imports:
import { connect } from "react-redux";

// Chakra imports:
import {
  Grid
} from "@chakra-ui/core";

// This component will display the admin page that has all the information from the DB
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