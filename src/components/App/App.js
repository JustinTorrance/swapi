import React, { Component } from 'react';
import './../../main.scss';
import ScrollingText from './../ScrollingText/ScrollingText';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollingText: false
    }
  }

  handleClick = () => {
    console.log(ScrollingText)
    this.setState({
      scrollingText: true
    })
  }

  returnScrollingTextOnStateChange = () => {
    if (this.state.scrollingText) {
      return <ScrollingText />
    } else {
      return undefined
    }
  }

  hidePlayButtonOnStateChange = () => {
    if (!this.state.scrollingText) {
      return <button className='play-button' onClick={() => this.handleClick()}><i className="far fa-play-circle play-button-icon"></i></button>      
    } else {
      return undefined
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>SWAPIBox</h1>
        <h2 className='subtitle'>The Ultimate Star Wars Wiki</h2>
        { this.hidePlayButtonOnStateChange() }
        { this.returnScrollingTextOnStateChange() }
      </div>
    );
  }
}

export default App;
