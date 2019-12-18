import {ActionCreator as cityActionCreator, initialState as cityInitialState} from '../city/city';
import NameSpace from '../name-spaces'

const SortType = {
  POPULAR: `Popular`,
  PRICE_ASC: `Price: low to high`,
  PRICE_DESC: `Price: high to low`,
  RATING_DESC: `Top rated first`
};

const initialState = {
  hotels: [],
  sortType: SortType.POPULAR,
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
};

const ActionCreator = {
  loadHotels: (hotels) => {
    return {
      type: ActionType.LOAD_HOTELS,
      payload: hotels,
    };
  },
  setSortType: (sortType) => {
    return {
      type: ActionType.SET_SORT_TYPE,
      payload: sortType,
    };
  }
};

const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadHotels(response.data));
        debugger;
        if (Object.is(_getState()[NameSpace.CITY], cityInitialState)) {
          let cities = [];
          response.data.forEach(element => {
            if (cities.indexOf(element.city.name) < 0) {
              cities.push(element.city.name);
            }
          });
          dispatch(cityActionCreator.setCities(cities));
          dispatch(cityActionCreator.setCity(cities.length > 0 ? cities[0] : ''));
        }
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return Object.assign({}, state, {
        hotels: action.payload,
      });
    case ActionType.SET_SORT_TYPE:
      return Object.assign({}, state, {
        sortType: action.payload,
      });
  }

  return state;
};

export {
  SortType,
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
