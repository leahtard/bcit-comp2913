import React, { Component } from 'react';
import './App.css';

import ShoppingListItem from './components/ShoppingListItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingList: [],
      newListItem: '',
      sortOrder: 'acs'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Only submit if there is a value
    if (this.state.newListItem) {

      this.setState((prevState) => ({
        shoppingList: [...prevState.shoppingList, {
          name: this.state.newListItem,
          timestamp: Date.now()
        }],
        newListItem: ""
      }));

    }
  }

  handleDelete(e) {
    this.setState({shoppingList: this.state.shoppingList.filter(item => item.timestamp !== e)})
  }

  render() {

    const shoppingList = this.state.shoppingList;

    return (
      <div className="App">
        <div className="container">
          <h1>Shopping List</h1>

          <form onClick={this.handleSubmit}>
            <label htmlFor="newListItem" style={{"display": "block" }}>Add an item to your shopping list:</label><br />
            <input
              id="newListItem"
              name="newListItem"
              type="text"
              value={this.state.newListItem}
              onChange={this.handleChange} />
            <button type="submit">Add to Shopping list</button>
          </form>

          <h4>My List</h4>

          {shoppingList.length === 0 &&
            <p><em>You have no items on your list. Add one.</em></p>
          }

          {shoppingList.map((item) =>

              <ShoppingListItem key={item.timestamp}
                name={item.name}
                timestamp={item.timestamp}
                deleteAction={this.handleDelete}/>

          )}
        </div>
      </div>
    );
  }
}

export default App;
