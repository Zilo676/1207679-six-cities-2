import React from 'react';
import PropTypes from 'prop-types';

import {City as city} from '../../mocks/cities.js';
import City from '../city/city.jsx';

const CityList = (props) => {

  const {onActiveItem} = props;

  return (<ul className="locations__list tabs__list">{
    Object.values(city).map((it, i) => (<City city={it.title} key={i} onActiveItem={onActiveItem}/>))}
  </ul>);
};

CityList.propTypes = {
  onActiveItem: PropTypes.func.isRequired,
}

export {CityList};
