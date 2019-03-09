import React, { Component } from 'react';
import './App.css';

const fruits = [
  {
    name: 'apples',
    count: 5,
  },
  {
    name: 'bananas',
    count: 4,
  },
  {
    name: 'cherries',
    count: 100,
  }
];

class App extends Component {
  render() {

    // const fruitElements = fruits.map((fruit) =>
    //   <li key={fruit.name}>
    //     {fruit.name} - {fruit.count}
    //   </li>
    // );

    return (
      <div className="App">
        {/* {fruitElements} */}

        {fruits.map((fruit) =>
          <li key={fruit.name}>
            {fruit.name} - {fruit.count}
          </li>
        )}
      </div>
    );
  }
}

export default App;
