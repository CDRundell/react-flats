import React, { Component } from 'react';
import flats from './flats.js'

class FlatList extends Component {
  render () {
    return (
      <div className="flat-list">
        {flats.map((flat) => {

          return (<div className="card" style={{backgroundImage: `url(${flat.imageUrl})`}}>
            <div className="card-description">
              <h2> {flat.name} </h2>
            </div>
          </div>
          )
        })

        }
      </div>
      )
    }
}

export default FlatList;
