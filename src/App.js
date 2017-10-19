import React, { Component } from 'react';
import './App.css';
import Map from './map';
import Panel from './controller-panel'
import CodePanel from './code-panel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <div className="row">
          <Panel />
          <CodePanel />
        </div>
      </div>
    );
  }
}

export default App;
