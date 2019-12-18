import {
  ActionCreator,
  ActionType,
  reducer,
} from './user';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthorizationRequired: false,
      user: {},
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.setUser(`user`)).toEqual({
      type: ActionType.SET_USER,
      payload: `user`
    });
  });
  it(`ActionCreator returns correct action2`, () => {
    expect(ActionCreator.requiredAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });
});
