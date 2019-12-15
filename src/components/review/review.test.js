import React from 'react';
import renderer from 'react-test-renderer';

import {Review} from './review.jsx';

it(`Correctly rendered`, () => {
  const review = {
    id: 1,
    user: {
      id: 17,
      isPro: false,
      name: `Emely`,
      avatarUrl: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`
    },
    rating: 4,
    comment: `I stayed here for one night and it was an unpleasant experience.`,
    date: `2019-12-05T19:40:40.338Z`
  };
  const tree = renderer.create(<Review
    review={review}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
