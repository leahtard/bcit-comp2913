import React, { Component } from 'react';
import axios from 'axios';

class Dogs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(`https://dog.ceo/api/breed/${this.props.breed}/images`)
      .then((response) => {
        this.setState({ images: response.data.message, isLoading: false });
      })
      .catch((error) => {
        console.error('ERROR!', error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.props.breed}</h1>
        <ul>
          {this.state.isLoading && 'Loading'}
          {this.state.images.slice(0, 10).map(image => (
            <li key={image}>
              <img style={{ width: 200 }} src={image} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dogs;
