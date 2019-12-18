import {
  ActionCreator,
  ActionType,
  reducer,
} from './active-item';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeItem: {},
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.setActiveItem({test: `test`})).toEqual({
      type: ActionType.SET_ACTIVE_ITEM,
      payload: {test: `test`},
    });
  });
});
