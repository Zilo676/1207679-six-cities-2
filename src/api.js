import axios from 'axios';
import {ActionCreator} from './reducer/user/user';

const BASE_URL = `https://htmlacademy-react-2.appspot.com/six-cities`;

const Path = {
  MAIN_PAGE: `/`,
  FAVORITES: `/favorites`,
  LOGIN: `/login`,
  OFFER_DETAILS: `/offer`
};

const convertStringToCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, (it) => {
    return it.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

const convertKeysToCamel = (object) => {
  if (object === Object(object) && !Array.isArray(object) && typeof object !== `function`) {
    const n = {};

    Object.keys(object).forEach((key) => {
      n[convertStringToCamel(key)] = convertKeysToCamel(object[key]);
    });
    return n;
  } else if (Array.isArray(object)) {
    return object.map((it) => {
      return convertKeysToCamel(it);
    });
  }

  return object;
};

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => (Object.assign({}, response, {data: convertKeysToCamel(response.data)}));
  const onFail = (err) => {
    if (err.response && (err.response.status === 403 || err.response.status === 401)) {
      dispatch(ActionCreator.requiredAuthorization(true));
    }
    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {
  Path,
  createAPI,
  BASE_URL
};
