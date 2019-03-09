import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
      <div className="profile" key={this.props.username}>
        <li>
          <img src={this.props.imgUrl} alt={this.props.name} />
          <p>
            <strong>{this.props.name}</strong><br/>
            {this.props.email}
            {this.props.gender === "female" &&
              <img src="https://cdn3.iconfinder.com/data/icons/rcons-user-action/32/girl-512.png" style={{ "width": "15px", "margin-left": "5px" }} />
            }
            {this.props.gender === "male" &&
              <img src="https://cmb.ac.lk/wp-content/uploads/male-300x300.png" style={{ "width": "15px", "margin-left": "5px" }} />
            }
            {this.props.nationality === "US" &&
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" style={{ "width": "25px", "margin-left": "5px" }} />
            }
            {this.props.nationality === "CA" &&
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png" style={{ "width": "25px", "margin-left": "5px" }} />
            }
          </p>
        </li>
      </div>
    );
  }

}

export default Profile;
