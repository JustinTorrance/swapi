import * as API from './apiCalls.js'

describe.skip('API', () => {
  it('should fetch film scrolling text', async () => {
    const expected = {
      episode: 3,
      title: 'title',
      body: 'body'
    }
    const result = await API.fetchFilmScrollingText()

    expect(API.fetchFilmScrollingText()).toEqual({expected})
  })


})