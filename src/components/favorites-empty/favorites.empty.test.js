import React from 'react';
import renderer from 'react-test-renderer';

import {FavoritesEmpty} from './favorites-empty.jsx';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<FavoritesEmpty
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
