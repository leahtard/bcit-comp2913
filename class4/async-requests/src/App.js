import React, { Component } from 'react';
import Dogs from './Dogs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dogs breed="husky" />
      </div>
    );
  }
}

export default App;
