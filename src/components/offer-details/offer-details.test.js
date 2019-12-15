import React from 'react';
import renderer from 'react-test-renderer';

import {OfferDetails} from './offer-details.jsx';

jest.mock(`../not-load/not-load.jsx`, () => `Not load`);
jest.mock(`../header/header.jsx`, () => `Header`);

jest.mock(`../rating/rating.jsx`, () => `Raiting`);
jest.mock(`../review-list/review-list.jsx`, () => `Review list`);
jest.mock(`../offer-list/offer-list.jsx`, () => `Offer list`);
jest.mock(`../map/map.jsx`, () => `Map`);

it.skip(`Correctly rendered`, () => {
  // const mockFunc = jest.fn();
  const offer = {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/1.png`,
    images: [`img/1.png`, `img/2.png`],
    title: `Beautiful & luxurious studio at great location`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `img/1.png`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  };

  const tree = renderer.create(<OfferDetails
    offer={offer}
    id={25}
    nearOffers={[offer, offer]}
    onClick={() => {}}
    cityLocation={{}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
