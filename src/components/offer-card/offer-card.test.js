import React from 'react';
import renderer from 'react-test-renderer';

import {OfferCard} from './offer-card.jsx';

it(`Correctly rendered`, () => {
  const onOfferCardHover = () => {};

  const tree = renderer.create(<OfferCard
    type={`offer.type`}
    price={123}
    description={`offer.description`}
    raiting={3.33}
    onOfferCardHover={onOfferCardHover}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
