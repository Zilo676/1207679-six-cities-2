import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

const getUser = (state) => state[NAME_SPACE].user;

export {
  getAuthorizationStatus,
  getUser,
};
