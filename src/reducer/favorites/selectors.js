import NameSpace from '../name-spaces';
import {createSelector} from 'reselect';

import {getAllCities} from '../city/selectors';

const NAME_SPACE = NameSpace.FAVORITES;

const getFavorites = (state) => state[NAME_SPACE].favorites;

const getFavoritesByCities = createSelector(
    getFavorites,
    getAllCities,
    (favorites, cities) => {
      let result = {};
      cities.forEach((city) => {
        result[city] = [];
        if (favorites) {
          favorites.forEach((it) => {
            if (it.city.name === city) {
              result[city].push(it);
            }
          });
        }
      });
      return result;
    }
);

export {
  getFavorites,
  getFavoritesByCities
};
