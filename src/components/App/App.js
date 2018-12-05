import React, { Component } from 'react'
import './../../main.scss'
import ScrollingText from './../ScrollingText/ScrollingText'
import Navigation from './../Navigation/Navigation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollingText: false,
      navigation: false,
      openingCrawl: {
        episode: '',
        title: '',
        body: ''
      }
    }
  }

  async componentDidMount() {
    const randomizer = Math.ceil(Math.random() * 7);
    const url = `https://swapi.co/api/films/${randomizer}/`;
    const response = await fetch(url);
    const film = await response.json();
    const body = film.opening_crawl;
    const episode = film.episode_id;
    const title = film.title;
      this.setState({ 
        openingCrawl: {
          episode: episode,
          title: title,
          body: body
        }   
      })
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
    console.log(this.state.openingCrawl)
    if (this.state.scrollingText) {
      return <ScrollingText openingCrawl={this.state.openingCrawl} />
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
