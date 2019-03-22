import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return (
      <div key={this.props.id} className="bookCard">
        {this.props.imgUrl && (
          <img src={this.props.imgUrl} alt={this.props.title} />
        )}
        <h4><a href={this.props.link}>{this.props.title}</a></h4>
        <p>{this.props.description}</p>
        <p><strong>Categories: {this.props.categories}</strong></p>
      </div>
    );
  }
}

export default BookCard;
