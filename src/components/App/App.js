import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// React Router DOM imports:
import { HashRouter as Router, Route } from "react-router-dom";

// Chakra imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// Component imports:
import Layout from '../Layout/Layout';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <Router>
          <div className="App">
            <Layout>
              <h1>Does this work?</h1>
              <Route exact path="/">
                
              </Route>
            </Layout>
            <br />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
