import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';
import {offers} from '../../mocks/offers.js';

const createNodeMock = () => document.createElement(`div`);

it(`Correctly rendered`, () => {

  const tree = renderer.create(<MainPage offers={offers}/>, {createNodeMock}).toJSON();
  expect(tree).toMatchSnapshot();
});
