import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`Correctly rendered`, () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
