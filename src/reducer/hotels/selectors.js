import {createSelector} from 'reselect';

import {getCurrentCity} from '../city/selectors';

import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.HOTELS;

const getHotels = (state) => state[NAME_SPACE].hotels;

const getHotelById = (state, props) => state[NAME_SPACE].hotels.find((hotel) => hotel.id === (+props.id));

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
  getHotelById,
  getHotelsByCity,
  getCityLocation,
};
