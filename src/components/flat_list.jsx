import React, { Component } from 'react';
import flats from './flats.js'

class FlatList extends Component {
  render () {
    return (
      <div className="flat-list">
        {flats.map((flat) => {


          return ( <div className="card">
            <p> {flat.name} </p>
          </div>
          )
        })

        }
      </div>
      )
    }
}

export default FlatList;
