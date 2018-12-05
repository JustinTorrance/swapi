import React, { Component } from 'react'
import './../../main.scss';

class CardContainer extends Component {
  constructor(cardContainerType) {
    super();
  }


  render() {
    return (
      <div className='CardContainer'>
        <h1>{this.props.cardContainerType}</h1>
      </div>
    )
  }
}

export default CardContainer;