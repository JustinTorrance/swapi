import React, { Component } from 'react'
import './../../main.scss'
import * as API from './../../apiCalls.js'
import ScrollingText from './../ScrollingText/ScrollingText'
import Navigation from './../Navigation/Navigation'
import CardContainer from './../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playButton: true,
      scrollingText: false,
      navigation: false,
      cardCategory: '',
      openingCrawl: {
        episode: '',
        title: '',
        body: ''
      },
      people: [],
      vehicles: [],
      planets: []
    }
  }

  async componentDidMount() {
    this.setFilmScrollingTextState()
    this.setPeopleState()
    this.setVehiclesState()
    this.setPlanetState()
  }

  setFilmScrollingTextState = async () => {
    const openingCrawl = await API.fetchFilmScrollingText()
    this.setState({ openingCrawl })
  }

  setPeopleState = async () => {
    const people = await API.fetchPeople()
    this.setState({ people })
  }

  setVehiclesState = async () => {
    const vehicles = await API.fetchVehicles()
    this.setState({ vehicles })
  }

  setPlanetState = async () => {
    const planets = await API.fetchPlanets()
    this.setState({ planets })
  }

  getCardCategory = (category) => {
    return this.state[category]      
  }

  handleChangeScrollingTextState = () => {
    this.setState({
      playButton: false,
      scrollingText: true
    })
  }

  handleHamburgerButtonClick = () => {
    this.setState({
      scrollingText: false,
      navigation: true
    })
  }

  handleNavigationClick = (event) => {
    this.setState({
      cardCategory: event.currentTarget.name,
      navigation: false
    })
  }

  returnScrollingTextOnStateChange = () => {
    if (this.state.scrollingText) {
      return <ScrollingText openingCrawl={this.state.openingCrawl} />
    } else {
      return undefined
    }
  }

  togglePlayButtonOnStateChange = () => {
    if (this.state.playButton) {
      return <button className='play-button' onClick={() => this.handleChangeScrollingTextState() }><i className="fas fa-play play-button-icon"></i></button>      
    } else {
      return undefined
    }
  }

  toggleHamburgerButtonOnStateChange = () => {
    if (!this.state.playButton && !this.state.navigation) {
      return <button className='hamburger-button' onClick={() => this.handleHamburgerButtonClick() }><i className="fas fa-bars hamburger-button-icon"></i></button>      
    } else {
      return undefined
    }
  }

  renderNavigationOnStateChange = () => {
    if (this.state.navigation) {
      return <Navigation  handleNavigationClick={this.handleNavigationClick}/>
    } else {
      return undefined
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='main-title'>swapibox</h1>
        { this.toggleHamburgerButtonOnStateChange() }
        <h2 className='subtitle'>the ultimate Star Wars Wiki</h2>
        { this.togglePlayButtonOnStateChange() }
        { this.returnScrollingTextOnStateChange() }
        { this.renderNavigationOnStateChange() }
        <CardContainer 
          cardCategory={this.state.cardCategory} 
          getCardCategory={this.getCardCategory} 
          people={this.state.people}
          vehicles={this.state.vehicles}
          planets={this.state.planets}
        />
      </div>
    );
  }
}

export default App;
