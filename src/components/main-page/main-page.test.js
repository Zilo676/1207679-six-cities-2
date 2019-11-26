import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';
import {offers} from '../../mocks/offers.js';
// import city from '../city/city.jsx';

jest.mock(`../offer-list/offer-list.jsx`, () => `Offer list`);
jest.mock(`../map/map.jsx`, () => `Map123`);
jest.mock(`../city-list/city-list.jsx`, () => `City list`);
// jest.mock(`toUpperCase`, () => jest.fn());

const city = `Paris`;
// const createNodeMock = () => document.createElement(`div`);

it.skip(`Correctly rendered`, () => {

  const tree = renderer.create(<MainPage offers={offers} city={city}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
