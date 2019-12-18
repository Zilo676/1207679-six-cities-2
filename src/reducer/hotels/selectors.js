import {createSelector} from 'reselect';
import {SortType} from './hotels';

import {getCurrentCity} from '../city/selectors';

import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.HOTELS;

const getHotels = (state) => state[NAME_SPACE].hotels;

const getHotelById = (state, props) => state[NAME_SPACE].hotels.find((hotel) => hotel.id === (+props.id));

const getSortType = (state) => state[NAME_SPACE].sortType;

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

// const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// const getRandomHotelsFactory = (amount) => {
//   return createSelector(
//     getHotelsByCity,
//     (hotels) => {
//       let randomHotels = [];
//       while (randomHotels.length < amount) {
//         const index = getRandomInt(hotels.length);
//         debugger;
//         if (!randomHotels.includes(hotels[index])) {
//           randomHotels.push(hotels[index]);
//         }
//       }
//       return randomHotels;
//     }
//   );
// };

// const MAX_HOTELS = 3;

// const getRandomHotels = createSelector(
//   getRandomHotelsFactory(MAX_HOTELS),
//   (hotels) => hotels
// );

// Такая логика по ТЗ
const getSortedHotelsByPopular = createSelector(
  getHotelsByCity,
  (hotels) => hotels
);

const getSortedHotelsByPriceAsc = createSelector(
  getHotelsByCity,
  (hotels) => hotels.concat().sort((a, b) => {
    return a.price <= b.price ? 1 : -1;
  })
);

const getSortedHotelsByPriceDesc = createSelector(
  getHotelsByCity,
  (hotels) => hotels.concat().sort((a, b) => {
    return a.price >= b.price ? 1 : -1;
  })
);

const getSortedHotelsByRatingDesc = createSelector(
  getHotelsByCity,
  (hotels) => hotels.concat().sort((a, b) => {
    return a.rating >= b.rating ? 1 : -1;
  })
);

const getSortedHotels = createSelector(
  (state) => state,
  getSortType,
  (state, sortType) => {
    switch (sortType) {
      case SortType.POPULAR:
        return getSortedHotelsByPopular(state);
      case SortType.PRICE_ASC:
        return getSortedHotelsByPriceAsc(state);
      case SortType.PRICE_DESC:
        return getSortedHotelsByPriceDesc(state);
      case SortType.RATING_DESC:
        return getSortedHotelsByRatingDesc(state);
    }
    return null;
  }
);

export {
  getHotels,

  getHotelById,
  getHotelsByCity,
  getCityLocation,
  getSortedHotels,
  getSortType,
};
