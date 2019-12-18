import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Favorites} from './favorites.jsx';
import offers from '../../mock/offers';

jest.mock(`../header/header.jsx`);
jest.mock(`../offer-list/offer-list.jsx`);

it(`Correctly rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<BrowserRouter><Favorites
    allCities={[`Amsterdam`]}
    favorites={{Amsterdam: [offers[0]]}}
    onClick={mockFunc}
    allFavorites={offers}
  />
  </BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
