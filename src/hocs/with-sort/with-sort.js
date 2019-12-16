import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/hotels/hotels';

const withSort = (Component) => {
  class WithSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpened: false,
      };

      this._onClickHandler = this._onClickHandler.bind(this);
      this._omFormHanler = this._omFormHanler.bind(this);
    }

    _onClickHandler(evt) {
      this.props.chancheSortType(evt.target.textContent);
    }

    _omFormHanler() {
      this.setState((state) => {
        return {
          isOpened: !state.isOpened
        };
      });
    }


    render() {
      return <Component
        {...this.props}
        onClick={this._onClickHandler}
        onForm={this._omFormHanler}
        isActive={this.state.isOpened}
      />;
    }
  }

  WithSort.propTypes = {
    chancheSortType: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    chancheSortType: (sortType) => {
      dispatch(ActionCreator.setSortType(sortType));
    },
  });

  return connect(null, mapDispatchToProps)(WithSort);
};

export default withSort;
