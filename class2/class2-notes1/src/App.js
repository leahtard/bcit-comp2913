import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    // If you are extending a component, you must add this.
    super(props);

    // State is always an object
    this.state = {
      currentDate: new Date()
    };

    console.log('constructor');
  }

  componentWillMount() { // Deprecated
    console.log('Component will mount');
    // Runs once per instance
  }

  componentDidMount() {
    console.log('Component did mount');
    // Runs once per instance
    setInterval(() => {
      this.setState({currentDate: new Date() });
      // this.state.currentDate = new Date(); // WRONG!!!
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // Function gets access to prevProps and prevState
    console.log('Component did update');

    // You can set state but you can cause infinate loops
    // Use when you need to set state based on a conditional param
  }

  componentDidCatch(error) {
    console.log('Component did catch');
    // Will run if a child component error... so typically on one added per application.
    // You can gracefully, React to errors
    // Use error object to get additional information
  }

  shouldComponentUpdate() {
    // Should probbaly never use it
    // Usually for performance uses
  }

  getDerivedStateFromProps() {
    // Won't use it very often
  }

  getSnapshotBeforeUpdate() {
    // Won't use it very often
  }


  render() {
    console.log('render');
    return (
      <div className="App">
        { this.state.currentDate.toString() }
      </div>
    );
  }
}

export default App;
