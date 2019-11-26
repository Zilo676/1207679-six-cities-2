import React from 'react';

import {City as city} from '../../mocks/cities.js';
import City from '../city/city.jsx';

const CityList = () => {
  return (<ul className="locations__list tabs__list">{
    Object.values(city).map((it, i) => (<City city={it.title} key={i} />))}
  </ul>);
};

export {CityList};
