describe.skip('App', () => {
  it('should match screenshot', () => {
    const wrapper = shallow(<BrowserRouter>
                              <App />
                            </BrowserRouter>)
    expect(wrapper).toMatchSnapshot()
  })
})