import React from 'react';
import renderer from 'react-test-renderer';

import {ReviewList} from './review-list.jsx';

jest.mock(`../review/review.jsx`, () => () => `Review`);

it(`Correctly rendered`, () => {
  const tree = renderer.create(<ReviewList
    comments={[]}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
