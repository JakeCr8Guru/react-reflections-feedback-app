import React, { useEffect, useState } from "react";

// Redux imports:
import { connect } from "react-redux";

// Axios imports:
import axios from "axios";

// Chakra imports:
import {
  Grid
} from "@chakra-ui/core";

// Component imports:
import AdminList from "../AdminList/AdminList";

// This component will display the admin page that has all the information from the DB
const Admin = (props) => {

  const feedbackGet = () => {
    const { dispatch } = this.props;
    axios
      .get("/api/feedback")
      .then((res) => {
        console.log(res);
        dispatch({ type: 'ADD_FEEDBACK', payload: res.data })
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(feedbackGet())

  const [feedback, setFeedback] = useState(props.feedback);

  return (
    <>
    <Grid gridColumn="column">
      <AdminList feedback={feedback}/>
    </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    feedback: state.feedback,
  };
};

export default connect(mapStateToProps)(Admin);