import React, { Component } from 'react';

class AnonView extends Component {

  render() {
    return (
      <div className="anonView">
        <h2>Login</h2>
        <button onClick={this.props.action}>Login</button>
      </div>
    );
  }

}

export default AnonView;
