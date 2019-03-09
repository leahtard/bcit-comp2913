import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerScore: 3,
      computerScore: 5
    }
  }
  render() {
    // let message;

    // if (this.state.computerScore === 5) {
    //   message = 'Computer won!';
    // } else if (this.state.playerScore === 5) {
    //   message = 'Player won!';
    // }

    return (
      <div className="App">
        {/* {message} */}

        {this.state.computerScore === 5 && (
          <h1>Computer won</h1>
        )}
        {this.state.playerScore === 5 ? 'Player won' : ''}
      </div>
    );
  }
}

export default App;
