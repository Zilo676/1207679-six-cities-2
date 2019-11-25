import React from 'react';
import PropTypes from 'prop-types';

import {City as city} from '../../mocks/cities.js';
import City from '../city/city.jsx';

const cities = Object.values(city);
debugger;

const CityList = () => {
  return (<ul className="locations__list tabs__list">{
    cities.map((city, i) => (<City city={city.title} key={i} />))}
  </ul>)
};

export {CityList};
