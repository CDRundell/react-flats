import React, { Component } from 'react';
import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {
  render () {
    return (
      <div>
          <FlatList />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
      )
  }
}

export default App;
