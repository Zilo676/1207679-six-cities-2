import {
  ActionCreator,
  ActionType,
  reducer,
} from './comments';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      comments: [],
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.loadComments([{test: `test`}])).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [{test: `test`}]
    });
  });
});
