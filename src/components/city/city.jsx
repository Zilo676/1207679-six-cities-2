import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer.js';

const City = (props) => {
  const {city, onClick} = props;
  return (<li className="locations__item" onClick={() => {onClick(city)}}>
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  </li>);
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(ActionCreator.setCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
});

export {City};

export default connect(null, mapDispatchToProps)(City);
