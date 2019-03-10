import React, { Component } from 'react';

class ShoppingListItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(e) {
    e.preventDefault();
    this.props.deleteAction(this.props.timestamp);
  }

  render() {
    return (
      <div className="shoppingListItem" key={this.props.timestamp}>
        {this.props.name}
        <span className="shoppingListItem__timestamp">
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
          }).format(this.props.timestamp)}
        </span>
        <button onClick={this.onDelete} style={{"marginLeft": "5px"}}>Delete</button>
      </div>
    );
  }
}

export default ShoppingListItem;
