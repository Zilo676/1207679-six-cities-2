import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const createNodeMock = () => document.createElement(`div`);

it(`Correctly rendered`, () => {
  const tree = renderer.create(<App />, {createNodeMock}).toJSON();
  expect(tree).toMatchSnapshot();
});
