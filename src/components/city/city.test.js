import React from 'react';
import renderer from 'react-test-renderer';

import {City} from './city.jsx';

it(`Correctly rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<City
    city={`Amsterdam`}
    onClick={mockFunc}
    onActiveItem={mockFunc}
    currentCity={`ASDB`}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
