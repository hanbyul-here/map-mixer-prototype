import React, { Component } from 'react';
import './App.css';
import Map from './map';
import Panel from './controller-panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <Panel />
      </div>
    );
  }
}

export default App;
