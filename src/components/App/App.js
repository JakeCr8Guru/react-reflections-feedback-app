import React, { Component } from "react";
import "./App.css";

// Chakra imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// Component imports:
import Layout from "../Layout/Layout";
import Content from "../Content/Content";

// This component renders the whole body of the app
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
