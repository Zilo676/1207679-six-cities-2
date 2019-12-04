const initialState = {
  hotels: [],
};

const ActionType = {
  LOAD_HOTELS: `LOAD_HOTELS`,
};

const ActionCreator = {
  loadHotels: (hotels) => {
    return {
      type: ActionType.LOAD_HOTELS,
      payload: hotels,
    };
  },
};

// Need explain
const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadHotels(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_HOTELS:
      return Object.assign({}, state, {
        hotels: action.payload,
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
