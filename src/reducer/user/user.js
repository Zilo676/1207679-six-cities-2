const initialState = {
  isAuthorizationRequired: false,
  user: {
    id: 1,
    email: `Sign In`,
    name: `Sign IN`,
    [`avatar_url`]: ``,
    [`is_pro`]: false
  },
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  requiredAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setUser: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user,
    };
  },
};

const Operation = {
  autorize: (email, password) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      'email': email,
      'password': password,
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.requiredAuthorization(false));
          dispatch(ActionCreator.setUser(response.data));
        }
      });
  },

  checkAutorize: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.requiredAuthorization(false));
          dispatch(ActionCreator.setUser(response.data));
        }
      });
  }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
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
