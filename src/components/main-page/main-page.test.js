import React from 'react';
import renderer from 'react-test-renderer';

import {MainPage} from './main-page.jsx';

jest.mock(`../offer-list/offer-list.jsx`);
jest.mock(`../map/map.jsx`);
jest.mock(`../city-list/city-list.jsx`);
jest.mock(`../header/header.jsx`);
jest.mock(`../sort-form/sort-form.jsx`);


jest.mock(`../../hocs/with-active-item/with-active-item.jsx`);
jest.mock(`../../hocs/with-sort/with-sort.jsx`);


const city = `Paris`;

it(`Correctly rendered`, () => {

  const tree = renderer.create(<MainPage
    offers={[]}
    city={city}
    cities={[`Abc`, `abc`]}
    cityLocation={{}}
    getOffers={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
