import {
  ActionCreator,
  ActionType,
  reducer,
} from './hotels';

describe(`Reducer works correctly`, () => {
  it(`should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      hotels: [],
      sortType: `Popular`,
    });
  });
});

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator returns correct action`, () => {
    expect(ActionCreator.loadHotels([
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          }
        },
        images: [`img/1.png`, `img/2.png`],
        title: `Beautiful & luxurious studio at great location`,
        rating: 4.8,
        type: `apartment`,
        bedrooms: 3,
        price: 120,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          id: 3,
          name: `Angelina`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        }
      },
      {
        id: 2,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.370216,
            longitude: 4.895168,
            zoom: 10
          }
        },
        images: [`img/1.png`, `img/2.png`],
        title: `Beautiful & luxurious studio at great location`,
        rating: 4.8,
        type: `apartment`,
        bedrooms: 3,
        price: 120,
        goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        host: {
          id: 3,
          name: `Angelina`,
        },
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8
        }
      }
    ])).toEqual({
      type: ActionType.LOAD_HOTELS,
      payload: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 10
            }
          },
          images: [`img/1.png`, `img/2.png`],
          title: `Beautiful & luxurious studio at great location`,
          rating: 4.8,
          type: `apartment`,
          bedrooms: 3,
          price: 120,
          goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
          host: {
            id: 3,
            name: `Angelina`,
          },
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
          location: {
            latitude: 52.35514938496378,
            longitude: 4.673877537499948,
            zoom: 8
          }
        },
        {
          id: 2,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.370216,
              longitude: 4.895168,
              zoom: 10
            }
          },
          images: [`img/1.png`, `img/2.png`],
          title: `Beautiful & luxurious studio at great location`,
          rating: 4.8,
          type: `apartment`,
          bedrooms: 3,
          price: 120,
          goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
          host: {
            id: 3,
            name: `Angelina`,
          },
          description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
          location: {
            latitude: 52.35514938496378,
            longitude: 4.673877537499948,
            zoom: 8
          }
        }
      ]
    });
  });
});
