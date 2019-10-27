import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';
import {offers} from '../../mocks/offers.js';

const onOfferCardHover = () => {};

it(`Correctly rendered`, () => {
  const tree = renderer.create(<MainPage premises={offers} onOfferCardHover={onOfferCardHover} />).toJSON();
  expect(tree).toMatchSnapshot();
});
