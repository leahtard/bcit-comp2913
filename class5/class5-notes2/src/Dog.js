import React, { Component } from 'react';
import axios from 'axios';

class Dog extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.breed !== this.props.match.params.breed) {
      this.fetchImages();
    }
  }

  fetchImages() {
    this.setState({ images: [] });
    const { breed } = this.props.match.params;
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(
      (response) => {
        this.setState({ images: response.data.message });
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Dogs: {this.props.match.params.breed}</h1>
        <ul>
          {this.state.images.slice(0, 20).map(image => {
            return (
              <li key={image}>
                <img src={image} style={{ width: 100 }} />
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Dog;
