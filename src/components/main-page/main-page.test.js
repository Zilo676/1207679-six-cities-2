import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';

jest.mock(`../offer-list/offer-list.jsx`, () => `Offer list`);
jest.mock(`../map/map.jsx`, () => `Map123`);
jest.mock(`../city-list/city-list.jsx`, () => `City list`);
jest.mock(`../header/header.jsx`, () => `Header`);

// jest.mock(`../../reducer/hotels/selectors`, () => `Selector`);
// jest.mock(`../../reducer/city/selectors`, () => `Selector`);
// jest.mock(`../../hocs/with-active-item/with-active-item`, () => `Hoc`);

const city = `Paris`;

it.skip(`Correctly rendered`, () => {

  const tree = renderer.create(<MainPage
    offers={[]}
    city={city}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
