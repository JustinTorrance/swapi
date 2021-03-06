import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
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
      planets: [],
      favorites: []
    }
  }

  async componentDidMount() {
    this.setFilmScrollingTextState()
    this.checkStorage()
  }

  removeFavorite = (card) => {
    const favorites = this.state.favorites.filter(favorite => {
      return favorite.Name !== card.Name;
    })
    this.setState({ favorites })
  }

  addFavorite = (card) => {
    if (!this.state.favorites.includes(card)) {
      const favorites = [...this.state.favorites, card];
      this.setState({ favorites })
    }
  }

  checkStorage = () => {
    const storedPeople = (JSON.parse(localStorage.getItem("storedPeople")))
    const storedVehicles = (JSON.parse(localStorage.getItem("storedVehicles")))
    const storedPlanets = (JSON.parse(localStorage.getItem("storedPlanets")))
    if (storedPlanets && storedPeople && storedVehicles) { 
      this.setState({
        people: storedPeople,
        planets: storedPlanets,
        vehicles: storedVehicles
      }) 
    } else {
        this.setPeopleState()
        this.setVehiclesState()
        this.setPlanetState() 
    }
  }

  storeData = () => {
      localStorage.setItem('storedPeople', JSON.stringify(this.state.people));
      localStorage.setItem('storedVehicles', JSON.stringify(this.state.vehicles));
      localStorage.setItem('storedPlanets', JSON.stringify(this.state.planets));   
  }

  setFilmScrollingTextState = async () => {
    const openingCrawl = await API.fetchFilmScrollingText()
    this.setState({ openingCrawl })
  }

  setPeopleState = async () => {
    const people = await API.fetchPeople()
    this.setState({ people }, () => {this.storeData()})
  }

  setVehiclesState = async () => {
    const vehicles = await API.fetchVehicles()
    this.setState({ vehicles }, () => {this.storeData()})
  }

  setPlanetState = async () => {
    const planets = await API.fetchPlanets()
    this.setState({ planets }, () => {this.storeData()})
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
      return <button className='play-button'><NavLink to='/scrolling-text' onClick={() => this.handleChangeScrollingTextState() }><i className="fas fa-play play-button-icon"></i></NavLink></button>      
    } else {
      return undefined
    }
  }

  toggleHamburgerButtonOnStateChange = () => {
    if (!this.state.playButton && !this.state.navigation) {
      return <button className='hamburger-button'><NavLink to='/navigation' onClick={() => this.handleHamburgerButtonClick() }><i className="fas fa-bars hamburger-button-icon"></i></NavLink></button>      
    } else {
      return undefined
    }
  }

  renderNavigationOnStateChange = () => {
    if (this.state.navigation) {
      return  (<Navigation  
                handleNavigationClick={this.handleNavigationClick}
                favorites={this.state.favorites}
              />)
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
        <Switch>
          <Route exact path='/scrolling-text' render={(props) => <ScrollingText openingCrawl={this.state.openingCrawl} />} />
          <Route exact path='/navigation' render={(props) => <Navigation handleNavigationClick={this.handleNavigationClick} favorites={this.state.favorites} />} />
          <Route exact path='/favorites' render={(props) => <CardContainer  cardCategory={this.state.cardCategory}
                                                                            getCardCategory={this.getCardCategory}
                                                                            addFavorite={this.addFavorite} 
                                                                            removeFavorite={this.removeFavorite}/> } />
          <Route exact path='/people' render={(props) => <CardContainer  cardCategory={this.state.cardCategory}
                                                                          getCardCategory={this.getCardCategory}
                                                                          addFavorite={this.addFavorite} /> } />
          <Route exact path='/planets' render={(props) => <CardContainer  cardCategory={this.state.cardCategory}
                                                                          getCardCategory={this.getCardCategory}
                                                                          addFavorite={this.addFavorite} /> } />
          <Route exact path='/vehicles' render={(props) => <CardContainer  cardCategory={this.state.cardCategory}
                                                                          getCardCategory={this.getCardCategory}
                                                                          addFavorite={this.addFavorite} /> } />
      </Switch>
      </div>
    );
  }
}

export default App;
