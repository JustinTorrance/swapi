import React, { Component } from 'react'
import './../../main.scss'
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
      cardContainerType: '',
      openingCrawl: {
        episode: '',
        title: '',
        body: ''
      },
      people: [],
      vehicles: []
    }
  }

  async componentDidMount() {
    this.fetchFilmScrollingText()
    this.fetchPeople()
    this.fetchVehicles()
  }

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/';
    const response = await fetch(url);
    const vehicleData = await response.json();
    const vehicles = vehicleData.results.map(vehicle => {
      return {
        name: vehicle.name,
        model: vehicle.model,
        capacity: vehicle.passengers,
        class: vehicle.vehicle_class
      }
    })
    this.setState({ vehicles })
  } 

  fetchSpecies = async (person) => {
    const response = await fetch(person.species)
    const species = await response.json()
    return species.name 
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const people = await response.json();
    const personData = await this.fetchNestedPeopleData(people.results)
    this.setState({
      people: personData
    })
    return Promise.all(personData)
  }

  fetchHomeWorld = async (person) => { 
    const response = await fetch(person.homeworld)
    const world = await response.json()
    return {
      homeWorldName: world.name,
      homeWorldPopulation: world.population
    }
  }

  fetchNestedPeopleData = async (people) => {
    const unresolvedPromises = await people.map(async person => {
      const homeworld = await this.fetchHomeWorld(person)
      const species = await this.fetchSpecies(person)
      return {
        name: person.name,
        homeworld: homeworld.homeWorldName,
        homeWorldPopulation: homeworld.homeWorldPopulation,
        species: species
      }
    })
    return Promise.all(unresolvedPromises)
  }

  fetchFilmScrollingText = async () => {
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
      cardContainerType: event.currentTarget.name,
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
    if (this.state.scrollingText) {
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
          cardContainerType={this.state.cardContainerType} 
          people={this.state.people}
          vehicles={this.state.vehicles}
        />
      </div>
    );
  }
}

export default App;
