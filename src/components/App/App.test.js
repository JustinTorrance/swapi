import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import * as API from '../../apiCalls.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
                    <App />
                  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should match screenshot', () => {
    const wrapper = shallow(<BrowserRouter>
                              <App />
                            </BrowserRouter>)
    expect(wrapper).toMatchSnapshot()
  })
  it('should add favorite on click', () => {
    const wrapper = shallow(<App />)
    const mockedFavorite = {
      Name: 'Luke',
      Species: 'Human',
      Homeworld: 'Tattooine'
    }
    const expected = [mockedFavorite]
    wrapper.instance().addFavorite(mockedFavorite)
    expect(wrapper.state('favorites')).toEqual(expected)
  })
  it('should remove favorite on click', () => {
    const wrapper = shallow(<App />)
    const mockedFavorite = {
      Name: 'Luke',
      Species: 'Human',
      Homeworld: 'Tattooine'
    }
    const expected = [];
    wrapper.instance().setState({favorites: [mockedFavorite]})
    wrapper.instance().removeFavorite(mockedFavorite)
    expect(wrapper.state('favorites')).toEqual(expected)
  })
  it('should invoke fetchFilmScrollingText', async () => {
    const wrapper = shallow(<App />)
    API.fetchFilmScrollingText = jest.fn()
    wrapper.instance().setFilmScrollingTextState()
    expect(API.fetchFilmScrollingText).toHaveBeenCalled()
  })
  it('should invoke fetchPeople', async () => {
    const wrapper = shallow(<App />)
    API.fetchPeople = jest.fn()
    wrapper.instance().setPeopleState()
    expect(API.fetchPeople).toHaveBeenCalled()
  })
  it('should invoke fetchVehicles', async () => {
    const wrapper = shallow(<App />)
    API.fetchVehicles = jest.fn()
    wrapper.instance().setVehiclesState()
    expect(API.fetchVehicles).toHaveBeenCalled()
  })
  it('should invoke fetchPlanets', async () => {
    const wrapper = shallow(<App />)
    API.fetchPlanets = jest.fn()
    wrapper.instance().setPlanetState()
    expect(API.fetchPlanets).toHaveBeenCalled()
  })
  it('should return category from App state', () => {
    const wrapper = shallow(<App />)
    const mockCategory = {'people': 'person'}
    wrapper.setState(mockCategory)
    expect(wrapper.instance().getCardCategory('people')).toEqual('person')
  })
  it('should return scrolling text depending on state', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({scrollingText: true}) 
    expect(wrapper.instance().returnScrollingTextOnStateChange()).toBeDefined()
  })
  it('should return play button depending on state', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({playButton: true}) 
    expect(wrapper.instance().togglePlayButtonOnStateChange()).toBeDefined()
  })
  it('should return hamburger button depending on state', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({playButton: false, navigation: false}) 
    expect(wrapper.instance().toggleHamburgerButtonOnStateChange()).toBeDefined()
  })
  it('should return navigation buttons depending on state', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({navigation: true}) 
    expect(wrapper.instance().renderNavigationOnStateChange()).toBeDefined()
  })
})
