import React from 'react';
import renderer from 'react-test-renderer';

import {OfferList} from './offer-list.jsx';

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    images: [`img/1.png`, `img/2.png`],
    title: `Beautiful & luxurious studio at great location`,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      name: `Angelina`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    images: [`img/1.png`, `img/2.png`],
    title: `Beautiful & luxurious studio at great location`,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      name: `Angelina`,
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  }
];

it(`Correctly rendered`, () => {
  const tree = renderer.create(<OfferList offers={offers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
