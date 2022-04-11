import React, { Component } from 'react';
import FlatList from './flat_list';

class App extends Component {
  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <h1> HELLO WORLD </h1>
        </div>
      </div>
      )
  }
}

export default App;
