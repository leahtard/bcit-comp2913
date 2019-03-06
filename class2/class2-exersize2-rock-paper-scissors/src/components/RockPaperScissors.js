import React, { Component } from 'react';
import './RackPaperScissors.css';

const playOptions = [ 'rock', 'paper', 'scissors' ];

class RockPaperScissors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0,
      computerOption: '',
      message: '',
      isComplete: false
    }

    this.playButtons = playOptions.map((option) =>
      <button key={option} onClick={() => this.getResult(option)}>{option}</button>
    );

    this.checkGameState = this.checkGameState.bind(this);
    this.winningScore = Number(this.props.winningScore);
    this.getResult = this.getResult.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  checkGameState() {
    const winningScore = this.winningScore;
    const playerScore = this.state.playerScore;
    const computerScore = this.state.computerScore;

    if (playerScore === winningScore) {
      this.setState({message: 'YOU WIN!', isComplete: true});
    }

    if (computerScore === winningScore) {
      this.setState({message: 'COMPUTER WINS!', isComplete: true});
    }
  }

  getResult(option) {
    const playerPlay = option;
    const computerPlay = playOptions[Math.floor(Math.random() * playOptions.length)];
    this.setState({computerOption: computerPlay});
    console.log(playerPlay + ' ' + computerPlay);

    if (playerPlay === computerPlay) {
      this.setState({message: 'DRAW, Take another turn!'});
    }
    else if (playerPlay === 'scissors') {
      if (computerPlay === 'paper') {
        this.setState({message: 'You win a point!'});
        this.setState(prevState => ({ playerScore: prevState.playerScore + 1 }));
      } else {
        this.setState({message: 'The computer wins a point!'});
        this.setState(prevState => ({ computerScore: prevState.computerScore + 1 }));
      }
    }
    else if (playerPlay === 'rock') {
      if (computerPlay === 'scissors') {
        this.setState({message: 'You win a point!'});
        this.setState(prevState => ({ playerScore: prevState.playerScore + 1 }));
      } else {
        this.setState({message: 'The computer wins a point!'});
        this.setState(prevState => ({ computerScore: prevState.computerScore + 1 }));
      }
    }
    else if (playerPlay === 'paper') {
      if (computerPlay === 'rock') {
        this.setState({message: 'You win a point!'});
        this.setState(prevState => ({ playerScore: prevState.playerScore + 1 }));
      } else {
        this.setState({message: 'The computer wins a point!'});
        this.setState(prevState => ({ computerScore: prevState.computerScore + 1 }));
      }
    }

    this.checkGameState();
  }

  resetGame() {
    this.setState({playerScore: 0, computerScore: 0, computerOption: '', message: ''});
  }

  render() {
    return (
      <div className="rock-paper-scissors">
        <h1>Rock / Paper / Scissors</h1>
        <h3>Scorecoard</h3>
        <div className="rock-paper-scissors__scoreboard">
          <div>
            <h3>Player</h3>
            <h1>{this.state.playerScore}</h1>
          </div>
          <div>
            <h3>Computer</h3>
            <h1>{this.state.computerScore}</h1>
          </div>
        </div>

        <br/>
        <button onClick={this.resetGame}>Reset</button>

        <div className="rock-paper-scissors__options">
          <div>
            <h3>Select your option:</h3>
            {this.playButtons}
          </div>
          <div>
            <h3>Computer option:</h3>
            {this.state.computerOption}
          </div>
        </div>

        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default RockPaperScissors;