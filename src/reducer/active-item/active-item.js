const initialState = {
  activeItem: {},
};

const ActionType = {
  SET_ACTIVE_ITEM: `SET_ACTIVE_ITEM`,
};

const ActionCreator = {
  setActiveItem: (item) => ({
    type: ActionType.SET_ACTIVE_ITEM,
    payload: item,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_ITEM:
      return Object.assign({}, state, {
        activeItem: action.payload,
      });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};

