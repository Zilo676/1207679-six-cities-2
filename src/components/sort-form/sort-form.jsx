import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { getSortType } from '../../reducer/hotels/selectors';

const SortForm = (props) => {
  const { cssClass, onClick, isActive, onForm, currentSortType } = props;
  const openedClass = cssClass + (isActive ? `__options--opened` : `__options--closed`);

  return (
    <form onClick={() => onForm()} className={`${cssClass}__sorting`} action="#" method="get">
      <span className={`${cssClass}__sorting-caption`}>Sort by </span>
      <span className={`${cssClass}__sorting-type`} tabIndex="0">
        {currentSortType}
        <svg className={`${cssClass}__sorting-arrow`} width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul onClick={(evt) => onClick(evt)} className={`${cssClass}__options ${cssClass}__options--custom ${openedClass}`}>
        <li className={`${cssClass}__option`} tabIndex="0" >Popular</li>
        <li className={`${cssClass}__option`} tabIndex="0">Price: low to high</li>
        <li className={`${cssClass}__option`} tabIndex="0">Price: high to low</li>
        <li className={`${cssClass}__option`} tabIndex="0">Top rated first</li>
      </ul>

    </form>
  );
}

SortForm.propTypes = {
  cssClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onForm: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  currentSortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentSortType: getSortType(state),
});

export { SortForm };

export default connect(mapStateToProps, null)(SortForm);

