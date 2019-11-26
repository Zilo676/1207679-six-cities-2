import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

const coordinates = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];

const city = {title: `Paris`, coordinates: [48.864716, 2.349014]};

// https://stackoverflow.com/questions/40852131/refs-are-null-in-jest-snapshot-tests-with-react-test-renderer
const createNodeMock = () => document.createElement(`div`);

it(`Correctly rendered`, () => {
  const tree = renderer.create(<Map coordinates={coordinates} city={city}/>, {createNodeMock}).toJSON();
  expect(tree).toMatchSnapshot();
});


