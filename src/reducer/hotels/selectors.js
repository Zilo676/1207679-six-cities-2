import {createSelector} from 'reselect';

import {getCurrentCity} from '../city/selectors';

import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.HOTELS;

const getHotels = (state) => {
  return state[NAME_SPACE].hotels;
};

const getHotelsByCity = createSelector(
    getHotels,
    getCurrentCity,
    (hotels, city) => {
      return hotels.filter((hotel) => hotel.city.name === city);
    }
);

const getCityLocation = createSelector(
    getHotelsByCity,
    (hotels) => {
      if (hotels.length > 0) {
        return hotels[0].city;
      }
      return null;
    }

);

export {
  getHotels,
  getHotelsByCity,
  getCityLocation,
};
