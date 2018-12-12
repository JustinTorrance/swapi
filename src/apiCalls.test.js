import * as API from './apiCalls.js'

describe('API', () => {
  let mockData
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
                    Promise.resolve({ok: true, json: () => Promise.resolve(mockData)})})
  })

  it('should fetch film scrolling text', async () => {
    mockData = {'species': 'human'}
    API.fetchFilmScrollingText()
    expect(window.fetch).toHaveBeenCalled()
  })

  it.skip('should return object with correct value datatypes', () => {
    mockData = {opening_crawl: 'More Star Wars', episode_id: 9, title: 'Yay Star Wars'}
    expect(API.fetchFilmScrollingText()).toEqual({episode: 9, title: 'Yay Star Wars', body: 'More Star Wars'})
  })

  it('should fetch people', async () => {
    mockData = {'species': 'human'}
    API.fetchPeople()
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/people/';
    API.fetchPeople()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should fetch vehicles', async () => {
    mockData = {'species': 'human'}
    API.fetchVehicles()
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/vehicles/';
    API.fetchVehicles()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should fetch planets', async () => {
    mockData = {'species': 'human'}
    API.fetchPlanets()
    expect(window.fetch).toHaveBeenCalled()
  })

  it('should call fetch with the correct params', async () => {
    const expected = 'https://swapi.co/api/planets/';
    API.fetchPlanets()
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
})