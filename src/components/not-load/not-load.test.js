import React from 'react';
import renderer from 'react-test-renderer';

import {NotLoad} from './not-load.jsx';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<NotLoad />).toJSON();
  expect(tree).toMatchSnapshot();
});
