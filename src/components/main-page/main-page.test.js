import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';

const Premises = [{
  type: `Apartament`,
  price: 120,
  description: `Beautiful & luxurious apartment at great location`,
  raiting: 93
},
{
  type: `Private room`,
  price: 80,
  description: `Wood and stone place`,
  raiting: 80
}, {
  type: `Apartament`,
  price: 132,
  description: `Canal View Prinsengracht`,
  raiting: 80
}, {
  type: `Apartament`,
  price: 180,
  description: `Nice, cozy, warm big bed apartment`,
  raiting: 100
}];

it(`Correctly rendered`, () => {
  const tree = renderer.create(<MainPage premises={Premises}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
