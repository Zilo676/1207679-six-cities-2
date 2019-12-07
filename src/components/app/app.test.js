import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

import {BrowserRouter} from 'react-router-dom';

const createNodeMock = () => document.createElement(`div`);

jest.mock(`../main-page/main-page.jsx`, () => `Main Page`);

it(`Correctly rendered`, () => {
  const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>, {createNodeMock}).toJSON();
  expect(tree).toMatchSnapshot();
});
