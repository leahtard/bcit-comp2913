import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      description: '',
      gender: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onClick={this.handleSubmit}>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />

          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />

          Textarea:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange} />

          Gender:
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
