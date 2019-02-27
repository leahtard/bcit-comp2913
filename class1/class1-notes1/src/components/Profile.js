import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={this.props.imageUrl} alt="" />
        <span>{this.props.firstName} {this.props.lastName}</span>
      </div>
    );
  }
}

export default Profile;