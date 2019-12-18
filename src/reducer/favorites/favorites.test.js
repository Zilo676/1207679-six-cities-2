import {
  ActionCreator,
  ActionType,
  reducer,
} from './favorites';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      favorites: [],
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.loadFavorites([{test: `test`}])).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: [{test: `test`}]
    });
  });
});
