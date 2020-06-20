import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Primer imports:
// import { BaseStyles } from '@primer/components'

// Chakra imports:
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// Component imports:
import Layout from '../Layout/Layout';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <CSSReset />
        <div className="App">
          <Layout>
            <h1>Does this work?</h1>
          </Layout>
          <br />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
