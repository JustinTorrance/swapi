import * as API from './apiCalls.js'

describe('API', () => {


  it('should fetch film scrolling test data', async () => {
    expect(API.fetchFilmScrollingText()).toEqual({})
  })
})