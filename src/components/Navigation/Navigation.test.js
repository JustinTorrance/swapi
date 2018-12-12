import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Navigation from './Navigation.js';

describe('Navigation', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Navigation handleNavigationClick={jest.fn()} favorites={[]} removeFavorite={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot()
  })
})