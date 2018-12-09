import React from 'react'
import './../../main.scss'
import App from './../App/App.js'

const Navigation = ({handleNavigationClick, favorites}) => {
  console.log(favorites.length)
  return (
    <div className='Navigation'>
      <button className='navigation-button navigation-button-fav'  
              name='favorites'  
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-heart navigation-button-icon"></i>
                <p>{favorites.length}</p>
              </button>                      
      <button className='navigation-button navigation-button-people'
              name='people' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-users navigation-button-icon"></i>
              </button>
      <button className='navigation-button navigation-button-planets'
              name='planets' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-globe-asia navigation-button-icon"></i>
              </button>
      <button className='navigation-button navigation-button-vehicles'
              name='vehicles' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-motorcycle navigation-button-icon"></i>
              </button>
    </div>
  )
}

export default Navigation