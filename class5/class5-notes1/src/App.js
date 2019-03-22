import React, { Component } from 'react';
import Example from './Example';
import './App.css';

function App() {
    return (
      <div className="App">
        My functional component
        <Example label="Label here">
          Some children
        </Example>
      </div>
    );
}

export default App;
