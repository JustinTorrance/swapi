import React, { Component } from 'react'
import './../../main.scss';

class Card extends Component {
  constructor() {
    super()
    this.state = {
      displayMode: 'profile'
    }
  }

  handleCardClick = () => {
    if (this.state.displayMode === 'profile') {
      this.setState({displayMode: 'info'})      
    } else if (this.state.displayMode === 'info') {
      this.setState({displayMode: 'profile'})
    }
  }

  render() {
    if(this.state.displayMode === 'profile') {
      return (
        <div className='Card' onClick={() => this.handleCardClick()}>
          <div className='card-profile'>
            <button className='card-favorite'><i className="fas fa-heart"></i></button>
            <img className='card-image' src='https://moviewriternyu.files.wordpress.com/2015/07/chewy-2.png' alt='wookie' />
            <h1>Name</h1>
          </div>
        </div>
      )      
    } else if (this.state.displayMode === 'info') {
      return (
        <div className='Card' onClick={() => this.handleCardClick()}>
          <div className='card-info'>
            <table className='card-info-table'>
              <tr>
                <th className='card-info-table-name'>Name</th>
              </tr>
              <tr>
                <td className='card-info-table-species'>Species</td>
              </tr>
              <tr>
                <td className='card-info-table-language'>Language</td>              
              </tr>
              <tr>
                <td className='card-info-table-data'>Data</td>              
              </tr>
            </table>
          </div>
        </div>
      )      
    }
  }

}

export default Card;