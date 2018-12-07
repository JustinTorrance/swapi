import React, { Component } from 'react'
import './../../main.scss';
import Card from './../Card/Card'


class CardContainer extends Component {
  constructor({cardContainerType, people, vehicles, planets}) {
    super();
  }

  displayCardBasedOnCategory = (cardContainerType) => {
    if (cardContainerType === undefined) {
      return null
    } else if (cardContainerType === 'people') {
        return this.props.people.map(card => {
          return <Card {...card} />        
        })
    } else if (cardContainerType === 'vehicles') {
        return this.props.vehicles.map(card => {
          return <Card {...card} />
        })
    } else if (cardContainerType === 'planets') {
      return this.props.planets.map(card => {
        return <Card {...card} />
      })
    }
  }

  render() {
    return (
      <div className='CardContainer'>
        {this.displayCardBasedOnCategory(this.props.cardContainerType)}
      </div>
    )
  }
}

export default CardContainer;