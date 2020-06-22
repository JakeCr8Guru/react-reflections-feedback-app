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

  const [newFeedback, setFeedback] = useState(props.feedback);

  const feedbackGet = () => {
    const { dispatch } = props;
    axios
      .get("/api/feedback")
      .then((res) => {
        console.log(res);
        dispatch({ type: 'ADD_FEEDBACK', payload: res.data })
        setFeedback(res.data)
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    feedbackGet()
  })

  return (
    <>
    <Grid gridColumn="column">
      <table>
          <AdminList feedback={newFeedback} />
      </table>
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