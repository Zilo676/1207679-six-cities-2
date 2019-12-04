import React from 'react';
import renderer from 'react-test-renderer';

import {CityList} from './city-list.jsx';

jest.mock(`../city/city.jsx`, () => `city`);

it(`Correctly rendered`, () => {

  const tree = renderer.create(<CityList cities={[]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
