import {
  ActionCreator,
  ActionType,
  reducer,
} from './city';

const CITIES = [`Amsterdam`, `Brussels`, `Cologne`, `Dusseldorf`, `Hamburg`, `Paris`];

describe(`Reducer works correctly`, () => {
  it(`Reducer return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      cities: CITIES,
      city: CITIES[0],
    });
  });
  it(`Reducer correctly change city`, () => {
    expect(reducer({
      cities: CITIES,
      city: CITIES[0],
    },
    {
      type: ActionType.SET_CITY,
      payload: `ABC`,
    })).toEqual({
      cities: CITIES,
      city: `ABC`,
    });
  });
});

describe(`ActionCreator works correcly`, () => {
  it(`Action creator return correct action`, () => {
    expect(ActionCreator.setCity(`AAAA`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `AAAA`,
    });
  });
});
