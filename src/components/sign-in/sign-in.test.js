import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {SignIn} from './sign-in.jsx';

jest.mock(`../header/header.jsx`, () => () => `header`);

it(`Component is rendered correctly`, () => {

  const tree = renderer.create(<BrowserRouter>
    <SignIn
      onChange={jest.fn()}
      onSubmit={jest.fn()}
      email={`random@email.com`}
      password={`123`}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
