import React, { Component } from 'react'
import './../../main.scss'
import ScrollingText from './../ScrollingText/ScrollingText'
import Navigation from './../Navigation/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollingText: false,
      navigation: false
    }
  }

  handleChangeScrollingTextState = () => {
    this.setState({
      scrollingText: true
    })
  }

  handleChangeMainPageState = () => {
    this.setState({
      scrollingText: false,
      navigation: true
    })
  }

  returnScrollingTextOnStateChange = () => {
    if (this.state.scrollingText) {
      return <ScrollingText />
    } else {
      return undefined
    }
  }

  togglePlayButtonOnStateChange = () => {
    if (!this.state.scrollingText && !this.state.navigation) {
      return <button className='play-button' onClick={() => this.handleChangeScrollingTextState() }><i className="fas fa-play play-button-icon"></i></button>      
    } else {
      return undefined
    }
  }

  toggleHamburgerButtonOnStateChange = () => {
    if (this.state.scrollingText) {
      return <button className='hamburger-button' onClick={() => this.handleChangeMainPageState() }><i className="fas fa-bars hamburger-button-icon"></i></button>      
    } else {
      return undefined
    }
  }

  renderNavigationOnStateChange = () => {
    if (this.state.navigation) {
      return <Navigation />
    } else {
      return undefined
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>SWAPIBox</h1>
        { this.toggleHamburgerButtonOnStateChange() }
        <h2 className='subtitle'>The Ultimate Star Wars Wiki</h2>
        { this.togglePlayButtonOnStateChange() }
        { this.returnScrollingTextOnStateChange() }
        { this.renderNavigationOnStateChange() }
      </div>
    );
  }
}

export default App;
