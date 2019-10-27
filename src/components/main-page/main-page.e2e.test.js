import React from 'react';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MainPage} from './main-page.jsx';
import {offers} from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

it(`All titles invokes callback`, () => {
  const clickHandler = jest.fn();
  const mainPage = mount(<MainPage premises={offers}/>);

  const titles = mainPage.find(`.place-card`);
  titles.forEach((title) => {
    title.simulate(`mouseenter`);
  });

  expect(clickHandler).toHaveBeenCalledTimes(offers.length);
  mainPage.unmount();
});
