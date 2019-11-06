import React from 'react';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferList} from './offer-list.jsx';
import {offers} from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

it(`All cards return correct values`, () => {
  const offerList = mount(<OfferList offers={offers} />);
  const cards = offerList.find(`.place-card`);

  cards.forEach((card, i) => {
    card.simulate(`mouseenter`);
    // TODO: fix console log error
    delete offers[i].id;
    delete offers[i].coordinates;
    expect(offerList.state().offer).toEqual(offers[i]);
  });

  offerList.unmount();
});
