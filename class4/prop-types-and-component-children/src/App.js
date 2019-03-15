import React, { Component } from 'react';
import Panel from './Panel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel
          title="Panel 1"
          description="Some description"
        >
          <p>Some description</p>
        </Panel>
        <Panel
          title="Panel 2"
          description="Some description"
        >
          <ul>
            <li>apples</li>
            <li>bananas</li>
          </ul>
        </Panel>
        <Panel
          title="Panel 3"
        >
          some text
          <img style={{ width: 150 }} src="https://img.etimg.com/thumb/msid-65278345,width-640,resizemode-4,imgsize-25622/august-1-world-wide-web-day.jpg" />
        </Panel>
      </div>
    );
  }
}

export default App;
