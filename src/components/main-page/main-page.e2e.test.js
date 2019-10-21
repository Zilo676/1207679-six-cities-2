import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MainPage} from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`All titles invokes callback`, () => {
  const clickHandler = jest.fn();
  const mainPage = shallow(<MainPage premises={Premises} onTitleClick={clickHandler} />);

  const titles = mainPage.find(`.place-card__name`);
  titles.forEach((title) => {
    title.simulate(`click`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(Premises.length);
});
