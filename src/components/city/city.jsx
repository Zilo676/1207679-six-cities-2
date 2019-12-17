import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getCurrentCity} from '../../reducer/city/selectors';

import {ActionCreator} from '../../reducer/city/city';

const City = (props) => {
  const {city, onClick, onActiveItem, currentCity} = props;
  const activeCssClass = currentCity === city ? `tabs__item--active` : ``;
  return (<li className="locations__item" onClick={() => {
    onActiveItem(city);
    onClick(city);
  }}>
    <span className={`locations__item-link tabs__item ${activeCssClass}`}>{city}</span>
  </li>);
};

City.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onActiveItem: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(ActionCreator.setCity(city));
  },
});

const mapStateTpProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: getCurrentCity(state),
});

export {City};

export default connect(mapStateTpProps, mapDispatchToProps)(City);
