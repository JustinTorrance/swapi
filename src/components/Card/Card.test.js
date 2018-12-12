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
  it('should turn heart icon into an X', () => {
    const mockButton = <button onClick={() => this.props.removeFavorite(this.props.card)} className='card-favorite'>X</button>
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
        cardCategory='favorites'
        card={mockCardData}
      />
    );
    expect(wrapper.instance().returnFavoriteButton().toString()).toMatch(mockButton.toString())
  })

  it('should return table to hold info for card', () => {
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
        cardCategory='favorites'
        card={mockCardData}
      />
    );
    const mockTable = <table className="card-info-table"><tbody className="card-info-table-body"><tr><th className="card-info-table-row">Name: Luke</th></tr><tr><th className="card-info-table-row">Species: Human</th></tr><tr><th className="card-info-table-row">Homeworld: Tattooine</th></tr><tr><th className="card-info-table-row-bottom">HomeworldPopulation: 150000</th></tr></tbody></table>
    expect(wrapper.instance().returnInfoTableBasedOnCategory(mockCardData).toString()).toEqual(mockTable.toString())
  })

});