import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      secondsFormatted: "00",
      minutes: 0,
      minutesFormatted: "00",
      isTiming: true
    }

    this.pauseTimer = this.pauseTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.isTiming) {
        this.tickTimer();
      }
    }, 1000);
  }

  tickTimer() {
    if (this.state.seconds < 59) {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
        secondsFormatted: this.formatNumber(prevState.seconds + 1)
      }));
    }

    else if (this.state.seconds === 59) {
      this.setState(prevState => ({
        seconds: 0,
        secondsFormatted: "00",
        minutes: prevState.minutes + 1,
        minutesFormatted: this.formatNumber(prevState.minutes + 1)
      }));
    }
  }

  formatNumber(n) {
    return (n < 10) ? ("0" + n) : n;
  }

  pauseTimer() {
    this.setState({isTiming: false });
  }

  startTimer() {
    this.setState({isTiming: true });
  }

  render() {
    return (
      <div className="stop-watch">
        <br /><br />
        {this.state.minutesFormatted}:{this.state.secondsFormatted}
        <br /><br />
        <button onClick={this.pauseTimer}>Pause</button>
        &nbsp;
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default StopWatch;