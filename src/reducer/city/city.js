const CITIES = [`Amsterdam`, `Brussels`, `Cologne`, `Dusseldorf`, `Hamburg`, `Paris`];

const initialState = {
  cities: CITIES,
  city: `Amsterdam`,
};

const ActionType = {
  SET_CITY: `SET_CITY`,
};

const ActionCreator = {
  setCity: (city) => {
    return {
      type: ActionType.SET_CITY,
      payload: city,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};
