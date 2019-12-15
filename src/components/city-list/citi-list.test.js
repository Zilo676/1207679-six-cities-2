import React from 'react';
import renderer from 'react-test-renderer';

import {CityList} from './city-list.jsx';

jest.mock(`../city/city.jsx`, () => `city`);

it(`Correctly rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<CityList
    cities={[]}
    onActiveItem={mockFunc}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
