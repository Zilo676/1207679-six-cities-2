import {
  ActionCreator,
  ActionType,
  reducer,
} from './comments';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      comments: [],
      isBlock: false,
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

  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.setBlock(true)).toEqual({
      type: ActionType.SET_BLOCK,
      payload: true
    });
  });
});
