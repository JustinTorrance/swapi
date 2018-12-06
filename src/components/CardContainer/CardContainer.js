import React, { Component } from 'react'
import './../../main.scss';
import Card from './../Card/Card'


class CardContainer extends Component {
  constructor({cardContainerType, people}) {
    super();
    // this.state = {
    //   numberOfCards: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    // }
  }

  displayCardBasedOnCategory = (cardContainerType) => {
    if (cardContainerType === undefined) {
      return null
    } else if (cardContainerType === 'people')
      return this.props.people.map(card => {
        console.log(card)
        return <Card {...card}/>        
      })
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