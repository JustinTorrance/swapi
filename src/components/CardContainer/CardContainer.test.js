import React from 'react'; 
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer.js';

describe('CardContainer', () => {
  it('should match snapshot', () => {
    const getCardCategory = () => {return ['aliens']}
    const wrapper = shallow(<CardContainer cardCategory={'aliens'} getCardCategory={getCardCategory} addFavorite={jest.fn()} removeFavorite={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should dynamically render card based on category', () => {
    const wrapper = shallow(<CardContainer cardCategory={false} getCardCategory={jest.fn()} addFavorite={jest.fn()} removeFavorite={jest.fn()} />)
    expect(wrapper.instance().displayCardBasedOnCategory(false)).toEqual(null)
  })
});