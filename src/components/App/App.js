import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// Component imports:
import Layout from '../Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>Does this work?</h1>
        </Layout>
        <br/>
      </div>
    );
  }
}

export default App;
