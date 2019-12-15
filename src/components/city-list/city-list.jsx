import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import City from '../city/city.jsx';

import {getAllCities} from '../../reducer/city/selectors';

const CityList = (props) => {

  const {cities, onActiveItem} = props;

  return (<ul className="locations__list tabs__list">
    {
      cities.map((it, i) => <City city={it} key={i} onActiveItem={onActiveItem} />)
    }
  </ul>);
};

CityList.propTypes = {
  onActiveItem: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateTpProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: getAllCities(state),
});

export {CityList};

export default connect(mapStateTpProps, null)(CityList);
