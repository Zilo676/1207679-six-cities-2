import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card.jsx';
import {offers} from '../../mocks/offers.js';

it(`Correctly rendered`, () => {
  const offer = offers[0];
  const onOfferCardHover = () => {};

  const tree = renderer.create(<OfferCard
    type={offer.type}
    price={offer.price}
    description={offer.description}
    raiting={offer.raiting}
    onOfferCardHover={onOfferCardHover}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
