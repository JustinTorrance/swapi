import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../main.scss'
import App from './../App/App.js'

const Navigation = ({handleNavigationClick, favorites}) => {
  return (
    <div className='Navigation'>
      <button className='navigation-button navigation-button-fav'><NavLink to='/favorites' 
              name='favorites'  
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-heart navigation-button-icon"></i>
                <p>{favorites.length}</p>
              </NavLink></button>                      
      <button className='navigation-button navigation-button-people'><NavLink to='/people'
              name='people' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-users navigation-button-icon"></i>
              </NavLink></button>
      <button className='navigation-button navigation-button-planets'><NavLink to='/planets'
              name='planets' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-globe-asia navigation-button-icon"></i>
              </NavLink></button>
      <button className='navigation-button navigation-button-vehicles'><NavLink to='/vehicles'
              name='vehicles' 
              onClick={(event) => handleNavigationClick(event)}>
                <i className="fas fa-motorcycle navigation-button-icon"></i>
              </NavLink></button>
    </div>
  )
}

export default Navigation