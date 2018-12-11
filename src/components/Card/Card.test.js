import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
  it('should match the snapshot', () => {
    const mockCardData = {
      Name:'Luke',
      Species:'Human',
      Homeworld:'Tattooine',
      HomeworldPopulation: 150000
    }

    const wrapper = shallow(
      <Card 
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
        cardCategory='people'
        card={mockCardData}
      />
    ); 
    expect(wrapper).toMatchSnapshot();
  });

});