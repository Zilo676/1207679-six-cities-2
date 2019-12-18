import {
  ActionType,
  ActionCreator,
  reducer,
} from './city';

const CITIES = [`Amsterdam`, `Brussels`, `Cologne`, `Dusseldorf`, `Hamburg`, `Paris`];

describe(`Reducer works correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      cities: [],
      city: ``,
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.setCity(`city`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `city`,
    });
  });

  it(`ActionCreator returns correct action2`, () => {
    expect(ActionCreator.setCities(CITIES)).toEqual({
      type: ActionType.SET_CITIES,
      payload: CITIES,
    });
  });
});

