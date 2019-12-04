import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.CITY;

const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

const getAllCities = (state) => {
  return state[NAME_SPACE].cities;
};

export {
  getAllCities,
  getCurrentCity,
};
