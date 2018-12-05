import React from 'react'
import './../../main.scss'

const Navigation = () => {
  return (
    <div className='Navigation'>
      <button className='navigation-button navigation-button-fav'><i className="fas fa-heart navigation-button-icon"></i></button>
      <button className='navigation-button navigation-button-people'><i className="fas fa-users navigation-button-icon"></i></button>
      <button className='navigation-button navigation-button-planets'><i className="fas fa-globe-asia navigation-button-icon"></i></button>
      <button className='navigation-button navigation-button-vehicles'><i className="fas fa-motorcycle navigation-button-icon"></i></button>
    </div>
  )
}

export default Navigation