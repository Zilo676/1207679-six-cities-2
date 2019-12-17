import React from 'react';
import renderer from 'react-test-renderer';

import {Rating} from './rating.jsx';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<Rating
    rating={5}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
