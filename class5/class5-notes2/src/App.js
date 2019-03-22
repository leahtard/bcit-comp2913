import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Settings from './Settings';
import Profile from './Profile';
import Home from './Home';
import Dog from './Dog';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/dogs/poodle">Poodle</Link></li>
          <li><Link to="/dogs/akita">Akita</Link></li>
          <li><Link to="/dogs/husky">Husky</Link></li>
        </ul>
        <div className="App">
          <Route path="/settings" component={Settings} />
          <Route path="/profile" component={Profile} />
          <Route path="/dogs/:breed" component={Dog} />
          <Route path="/" exact component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
