import React, { Component } from 'react'
import './../../main.scss';

class Card extends Component {
  constructor({name, species, homeWorldPopulation, homeworld}) {
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
            <h3>{this.props.name}</h3>
          </div>
        </div>
      )      
    } else if (this.state.displayMode === 'info') {
      return (
        <div className='Card' onClick={() => this.handleCardClick()}>
          <div className='card-info'>
            <table className='card-info-table'>
              <tbody>
                <tr>
                  <th className='card-info-table-name'>{this.props.name}</th>
                </tr>
                <tr>
                  <td className='card-info-table-species'>Species: {this.props.species}</td>
                </tr>
                <tr>
                  <td className='card-info-table-language'>Homeworld: {this.props.homeworld}</td>              
                </tr>
                <tr>
                  <td className='card-info-table-data'>Homeworld Population: {this.props.homeWorldPopulation}</td>              
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )      
    }
  }

}

export default Card;