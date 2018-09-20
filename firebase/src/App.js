import React, { Component } from 'react';
import './App.css';
import Firebase from './Firebase'

class App extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <Firebase/>
      </div>
    );
  }
}

export default App;
