import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/city/city';

const City = (props) => {
  const {city, onClick, onActiveItem} = props;

  return (<li className="locations__item" onClick={() => {
    onActiveItem(city);
    onClick(city);
  }}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>);
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onActiveItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(ActionCreator.setCity(city));
  },
});

export {City};

export default connect(null, mapDispatchToProps)(City);
