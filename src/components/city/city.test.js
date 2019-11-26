import React from 'react';
import renderer from 'react-test-renderer';

import {City} from './city.jsx';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<City city={`Amsterdam`} />).toJSON();
  expect(tree).toMatchSnapshot();
});
