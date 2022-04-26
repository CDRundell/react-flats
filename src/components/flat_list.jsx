import React, { Component } from 'react';
import flats from './flats.js'
import Flat from './flat'

class FlatList extends Component {

  render (props) {
    return (
      <div className="flat-list">
        {flats.map((flat, index) => {
          return (


          // <div className="card" key={index} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`}}>
          //   <div className="card-category">{flat.price} {flat.priceCurrency}</div>
          //   <div className="card-description">
          //     <h2> {flat.name} </h2>
          //   </div>
          //   <a className="card-link" href="#"></a>
          // </div>
            <Flat
              flat={flat}
              key={flat.lat}
              selected={flat.name === this.props.selectedFlat.name}
              index={index}
              selectFlat={this.props.selectFlat}
            />


          )
        })

        }
      </div>
      )
    }
}

export default FlatList;
