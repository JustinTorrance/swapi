import React from 'react';
import './../../main.scss';




const ScrollingText = ({openingCrawl}) => {
  console.log('episode', openingCrawl.episode)
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

export default ScrollingText;

