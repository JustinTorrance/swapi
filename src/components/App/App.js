import React, { Component } from 'react'
import './../../main.scss'
import ScrollingText from './../ScrollingText/ScrollingText'
import Navigation from './../Navigation/Navigation'
import CardContainer from './../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollingText: false,
      navigation: false,
      cardContainerType: '',
      openingCrawl: {
        episode: '',
        title: '',
        body: ''
      },
      person: []
    }
  }

  async componentDidMount() {
    this.fetchFilmScrollingText()
    this.fetchPeople()
  }




  fetchPersonSpecies = async (people) => {
    const unresolvedPromises = people.map(async person => {
      const response = await fetch(person.species)
      const data = await response.json()
      return {person: person.name, species: data.name}
    })
    return Promise.all(unresolvedPromises)
  }

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const people = await response.json();
    const person = await this.fetchPersonSpecies(people.results)
    this.setState({
      person
    })
  }


  // fetchData = (data) => {
  //   const unresolvedPromises = data.map(async staff => {
  //     const response  = await fetch(staff.info)
  //     const data = await response.json()
  //     return {...data, name: staff.name}
  //   })
  //   return Promise.all(unresolvedPromises)
  // }

  // async componentDidMount() {
  //   const url = 'http://localhost:3001/api/frontend-staff'
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   const staff = await this.fetchData(data.bio)
  //     this.setState({ staff })
  // }






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
    this.setState({scrollingText: true})
  }

  handleChangeMainPageState = () => {
    this.setState({
      scrollingText: false,
      navigation: true
    })
  }

  handleNavigationClick = (event) => {
    this.setState({cardContainerType: event.currentTarget.name})
  }

  returnScrollingTextOnStateChange = () => {
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
      return <Navigation  handleNavigationClick={this.handleNavigationClick}/>
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
        <CardContainer cardContainerType={this.state.cardContainerType} />
      </div>
    );
  }
}

export default App;
