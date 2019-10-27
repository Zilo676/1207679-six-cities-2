import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferCard} from './offer-card.jsx';
// import {offers} from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

it(`Card return value and invokes callback`, () => {
  const clickHandler = jest.fn();
  const event = {preventDefault: () => {}};
  const offer = {
    type: `Apartament`,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    raiting: 93
  };
  const offerCard = shallow(<OfferCard
    type={offer.type}
    price={offer.price}
    description={offer.description}
    raiting={offer.raiting}
    onOfferCardHover={clickHandler} />);

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseenter`, event);

  expect(clickHandler).toHaveBeenCalled();
  expect(clickHandler).toHaveBeenCalledWith(offer);
});

