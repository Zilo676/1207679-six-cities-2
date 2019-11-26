import {
  // reducer,
  ActionCreator,
  filterOffersByCity,
  Action
} from './reducer.js';

describe(`Filter offers `, () => {
  it(`is correct`, () => {
    expect(filterOffersByCity([
      {
        id: `799663af-e554-49c5-b73e-d61b36b503f0`,
        type: `Apartament`,
        price: 120,
        description: `Beautiful & luxurious apartment at great location`,
        coordinates: [52.3909553943508, 4.85309666406198],
        raiting: 93,
        city: `Amsterdam`,
      },
      {
        id: `4a6cf5ff-150e-40f2-baf8-820461958a61`,
        type: `Private room`,
        price: 80,
        description: `Wood and stone place`,
        coordinates: [52.369553943508, 4.85309666406198],
        raiting: 80,
        city: `Amsterdam`,
      },
      {
        id: `0dcee833-d3f2-4f12-9559-a2775ca7f733`,
        type: `Apartament`,
        price: 132,
        description: `Canal View Prinsengracht`,
        coordinates: [52.3909553943508, 4.929309666406198],
        raiting: 80,
        city: `Amsterdam`,
      },
      {
        id: `f5035346-5f36-480f-9401-b8f5dc8186c6`,
        type: `Apartament`,
        price: 180,
        description: `Nice, cozy, warm big bed apartment`,
        coordinates: [52.3809553943508, 4.939309666406198],
        raiting: 100,
        city: `Amsterdam`,
      },
      {
        id: `76119596-1f8c-4df9-bb83-ce109ef8f3af`,
        type: `Apartament`,
        price: 180,
        description: `Nice, cozy, warm big bed apartment`,
        coordinates: [48.864716, 2.349014],
        raiting: 100,
        city: `Paris`,
      }], `Paris`))
      .toEqual([
        {
          id: `76119596-1f8c-4df9-bb83-ce109ef8f3af`,
          type: `Apartament`,
          price: 180,
          description: `Nice, cozy, warm big bed apartment`,
          coordinates: [48.864716, 2.349014],
          raiting: 100,
          city: `Paris`,
        }
      ]);
  });
});

describe(`Action Creator works correctly `, () => {
  it(`action creator setCity is correct`, () => {
    expect(ActionCreator.setCity(`City`)).toEqual({
      type: Action.SET_CITY,
      payload: `City`,
    });
  });

  it(`action creator getOffers is correct`, () => {
    expect(ActionCreator.getOffers(`Paris`)).toEqual({
      payload: [{
        id: `76119596-1f8c-4df9-bb83-ce109ef8f3af`,
        type: `Apartament`,
        price: 180,
        description: `Nice, cozy, warm big bed apartment`,
        coordinates: [48.864716, 2.349014],
        raiting: 100,
        city: `Paris`,
      }],
      type: Action.GET_OFFERS,
    });
  });
});
