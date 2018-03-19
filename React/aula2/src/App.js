import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <User></User>
      </div>
    );
  }
}

export default App;
