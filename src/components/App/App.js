import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Primer imports:
import { BaseStyles } from '@primer/components'

// Component imports:
import Layout from '../Layout/Layout';

class App extends Component {
  render() {
    return (
      <BaseStyles>
        <div className="App">
          <Layout>
            <h1>Does this work?</h1>
          </Layout>
          <br />
        </div>
      </BaseStyles>
    );
  }
}

export default App;
