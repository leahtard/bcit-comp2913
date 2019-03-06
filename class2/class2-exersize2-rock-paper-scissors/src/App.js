import React, { Component } from 'react';
import './App.css';

import RockPaperScissors from './components/RockPaperScissors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RockPaperScissors winningScore="5" />
      </div>
    );
  }
}

export default App;
