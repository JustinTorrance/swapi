import React, { Component } from 'react';
import './../../main.scss';
import Card from './../Card/Card';
import PropTypes from 'prop-types';


class CardContainer extends Component {
  constructor({cardCategory, getCardCategory, addFavorite, removeFavorite}) {
    super();
  }

  displayCardBasedOnCategory = (cardCategory) => {
    if (cardCategory) {
      const cardCategoryData = this.props.getCardCategory(cardCategory)
      if (!cardCategoryData[0]) {
        return `You haven't selected any favorites yet`
      } else {
        return cardCategoryData.map((card, index) => {
          return <Card card={card} cardCategory={this.props.cardCategory} key={index} addFavorite={this.props.addFavorite} removeFavorite={this.props.removeFavorite}/>        
        })  
      }      
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

CardContainer.propTypes = {
  getCardCategory: PropTypes.func.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func,
}

export default CardContainer;