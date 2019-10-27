import React from 'react';
import renderer from 'react-test-renderer';

import {OfferList} from './offer-list.jsx';
import {offers} from '../../mocks/offers.js';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<OfferList offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
