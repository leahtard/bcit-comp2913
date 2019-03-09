import React, { Component } from 'react';
import './App.css';

import AnonView from './components/AnonView';
import AuthView from './components/AuthView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log('logging in');
    this.setState({ isLoggedIn: true });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let currentView;

    if (isLoggedIn) {
      currentView = <AuthView />;
    } else {
      currentView = <AnonView action={this.handleLogin} />;
    }

    return (
      <div className="App">
        {currentView}
      </div>
    );
  }
}

export default App;
