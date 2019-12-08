import {
  Operation as hotelsOperation
} from '../hotels/hotels';

const initialState = {
  favorites: [],
};

const ActionType = {
  LOAD_FAVORITES: `LOAD_FAVORITES`,
};

const ActionCreator = {
  loadFavorites: (favorites) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };
  },
};

const Operation = {
  loadFavorites: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
      });
  },

  changeFavoriteStatus: (hotelId, status) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${hotelId}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(response.data));
        dispatch(hotelsOperation.loadHotels());
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
