import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// React Router DOM imports:
// import { HashRouter as Router } from "react-router-dom";

// Chakra imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// Component imports:
import Layout from "../Layout/Layout";
import Content from "../Content/Content";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <div className="App">
          <Layout>
            <Content />
          </Layout>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
