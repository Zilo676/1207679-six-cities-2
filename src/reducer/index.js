import {combineReducers} from 'redux';

import {reducer as user} from './user/user';
import {reducer as city} from './city/city';
import {reducer as hotels} from './hotels/hotels';
import {reducer as favorites} from './favorites/favorites';

import NameSpace from './name-spaces';

export default combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.CITY]: city,
  [NameSpace.HOTELS]: hotels,
  [NameSpace.FAVORITES]: favorites,
});
