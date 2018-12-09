import React, { Component } from 'react'
import './../../main.scss';

class Card extends Component {
  constructor({addFavorite, removeFavorite, cardCategory, ...card}) {
    super()
    this.state = {
      displayProfile: true
    }
  }

  handleCardClick = () => {
    this.setState({displayProfile: !this.state.displayProfile})
  }

  returnFavoriteButton = () => {
    if (this.props.cardCategory === 'favorites') {
      return <button onClick={() => this.props.removeFavorite(this.props.card)} className='card-favorite'>X</button>
    } else {
       return <button onClick={() => this.props.addFavorite(this.props.card)} className='card-favorite'><i className="fas fa-heart"></i></button>
    }
  }

  returnInfoTableBasedOnCategory = (card) => {
    const tableRows = Object.keys(this.props.card).map((row, index) => {
        const tableRowStyle = () => {
          if (index === Object.keys(this.props.card).length - 1) {
            return 'card-info-table-row-bottom'
          } else {
            return 'card-info-table-row'
          }
        }
  
        return <tr key={index}><th className={tableRowStyle()}>
                  {Object.keys(this.props.card)[index]}: {Object.values(this.props.card)[index]}
               </th></tr>
    })

    return (
      <table className='card-info-table'>
        <tbody className='card-info-table-body'>
          { tableRows }
        </tbody>
      </table>
    )
  }

  returnProfileSideOfCard = () => {
    return (
      <div className='Card'>
        { this.returnFavoriteButton() }
        <div className='card-profile' onClick={() => this.handleCardClick()}>
          <img className='card-image' src='https://moviewriternyu.files.wordpress.com/2015/07/chewy-2.png' alt='wookie' />
          <h3 className='card-profile-name'>{this.props.card.Name.toLowerCase()}</h3>
        </div>
      </div>
    ) 
  }

  returnInfoSideOfCard = (card) => {
    return (
      <div className='Card'>
        <div className='card-info' onClick={() => this.handleCardClick()}>
          { this.returnInfoTableBasedOnCategory(card) }
        </div>
      </div>
    ) 
  }

  render() {
    if(this.state.displayProfile) {
      return this.returnProfileSideOfCard()
    } else {  
      return this.returnInfoSideOfCard(this.props.card)
    } 
  }

}

export default Card;

