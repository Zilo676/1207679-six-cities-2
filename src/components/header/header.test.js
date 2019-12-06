import React from 'react';
import renderer from 'react-test-renderer';

import {Header} from './header.jsx';

const user = {
  id: 1,
  email: `Sign In`,
  name: `Sign IN`,
  [`avatar_url`]: ``,
  [`is_pro`]: false
};

it(`Component is rendered correctly`, () => {
  const tree = renderer.create(<Header
    user={user}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
