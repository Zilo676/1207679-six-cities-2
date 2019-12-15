import React from 'react';
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

const coordinates = [
  {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
];

const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10
  }
};

// https://stackoverflow.com/questions/40852131/refs-are-null-in-jest-snapshot-tests-with-react-test-renderer
const createNodeMock = () => document.createElement(`div`);

it(`Correctly rendered`, () => {
  const tree = renderer.create(<Map
    location={coordinates}
    city={city}
    cssClass={`abc`}
  />, {createNodeMock}).toJSON();
  expect(tree).toMatchSnapshot();
});


