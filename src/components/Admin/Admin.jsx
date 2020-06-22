import React, { useEffect, useState } from "react";

// Redux imports:
import { connect } from "react-redux";

// Axios imports:
import axios from "axios";

// Chakra imports:
import {
  Grid,
  Box,
  Button
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

  const refreshFeedback = () => {
    feedbackGet()
  }

  return (
    <>
    <Grid gridColumn="column">
        <Button
          onClick={refreshFeedback}
          variantColor="green"
          variant="outline"
          size="lg"
          height="48px"
          width="200px"
          border="2px"
        >
          Refresh
          </Button>
      <Box>
          <table>
            <thead>
              <tr>
                <th>Feeling</th>
                <th>Comprehension</th>
                <th>Support</th>
                <th>Comments</th>
                <th>Delete</th>
              </tr>
            </thead>
            <AdminList feedback={newFeedback} />
          </table>
      </Box>
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