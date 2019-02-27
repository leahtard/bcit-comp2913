import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'red'
    };

    // Makes this available in custom function below
    this.handleClick = this.handleClick.bind(this);
    this.handleClickLink = this.handleClickLink.bind(this);
  }

  handleClick() {
    console.log('CLICKED');
    this.setState({ color: 'blue'});
  }

  handleClickLink(e) {
    e.preventDefault();
    console.log('blocked');
  }


  render() {
    return (
      <div className="App">
        <button style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}>Click me</button>
        <a onClick={this.handleClickLink} href="http://bcit.ca">BCIT</a>
      </div>
    );
  }
}

export default App;
