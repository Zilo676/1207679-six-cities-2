import {offers} from './mocks/offers.js';
import {City} from './mocks/cities.js';

const Action = {
  SET_CITY: `SET_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const filterOffersByCity = (suggestions, city) => suggestions.filter((it) => it.city === city);

const initialState = {
  city: City.PARIS.title,
  offers: filterOffersByCity(offers, City.PARIS.title),
};

const ActionCreator = {
  setCity: (city) => ({
    type: Action.SET_CITY,
    payload: city
  }),

  getOffers: (city) => ({
    type: Action.GET_OFFERS,
    payload: filterOffersByCity(offers, city)
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.SET_CITY: return Object.assign({}, state, {
      city: action.payload
    });
    case Action.GET_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });
  }
  return state;
};

export {reducer, ActionCreator, filterOffersByCity, Action};
