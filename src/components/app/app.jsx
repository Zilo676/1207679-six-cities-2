import React from 'react';
import {MainPage} from '../main-page/main-page.jsx';

import {offers} from '../../mocks/offers.js';

const onOfferCardHover = (evt, offer) => offer;

const App = () => {
  return <MainPage premises={offers} onOfferCardHover={onOfferCardHover} />;
};

export {App};
