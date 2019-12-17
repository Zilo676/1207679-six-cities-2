import React from 'react';
import renderer from 'react-test-renderer';

import {CommentForm} from './comment-form.jsx';

it(`Correctly rendered`, () => {
  const mockFunc = jest.fn();
  const tree = renderer.create(<CommentForm
    onRatingClick={mockFunc}
    onTextArea={mockFunc}
    onSubmit={mockFunc}
    onFormChange={mockFunc}
    isDisabled={true}
    hotelId={25}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
