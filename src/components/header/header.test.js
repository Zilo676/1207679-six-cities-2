import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Header} from './header.jsx';

const user = {
  id: 1,
  email: `Sign In`,
  name: `Sign IN`,
  [`avatar_url`]: ``,
  [`is_pro`]: false
};

it(`Component is rendered correctly`, () => {
  const tree = renderer.create(<BrowserRouter>
    <Header
      user={user}
    />
  </BrowserRouter>).toJSON();

  expect(tree).toMatchSnapshot();
});
