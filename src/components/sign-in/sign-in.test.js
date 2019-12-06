import React from 'react';
import renderer from 'react-test-renderer';

import {SignIn} from './sign-in.jsx';

it(`Component is rendered correctly`, () => {
  const tree = renderer.create(<SignIn
    onChange={jest.fn()}
    onSubmit={jest.fn()}
    email={`random@email.com`}
    password={`123`}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
