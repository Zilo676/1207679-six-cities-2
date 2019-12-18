const CITIES = [`Amsterdam`, `Brussels`, `Cologne`, `Dusseldorf`, `Hamburg`, `Paris`];

const initialState = {
  cities: [],
  city: '',
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_CITIES: `SET_CITIES`,
};

const ActionCreator = {
  setCity: (city) => {
    return {
      type: ActionType.SET_CITY,
      payload: city,
    };
  },
  setCities: (cities) => {
    return {
      type: ActionType.SET_CITIES,
      payload: cities,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.SET_CITIES:
      return Object.assign({}, state, {
        cities: action.payload,
      });
  }

  return state;
};

export {
  initialState,
  ActionCreator,
  ActionType,
  reducer,
};
