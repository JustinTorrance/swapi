import React from 'react';
import './../../main.scss';
import PropTypes from 'prop-types';


const ScrollingText = ({openingCrawl}) => {
  return (
    <div className='ScrollingText'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <p>{openingCrawl.episode}</p>
            <h1>{openingCrawl.title}</h1>
          </div>    
          <p>{openingCrawl.body}</p>
        </div>
      </section>
    </div>
  )
}

ScrollingText.propTypes = {
  openingCrawl: PropTypes.object.isRequired,
}

export default ScrollingText;

