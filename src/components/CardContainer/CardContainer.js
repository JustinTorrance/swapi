import React, { Component } from 'react'
import './../../main.scss';
import Card from './../Card/Card'


class CardContainer extends Component {
  constructor({cardCategory, getCardCategory}) {
    super();
  }

  displayCardBasedOnCategory = (cardCategory) => {
    if (cardCategory) {
      const cardCategoryData = this.props.getCardCategory(cardCategory)
      return cardCategoryData.map((card, index) => {
        return <Card card={card} cardCategory={this.props.cardCategory} key={index}/>        
      })          
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='CardContainer'>
        {this.displayCardBasedOnCategory(this.props.cardCategory)}
      </div>
    )
  }
}

export default CardContainer;