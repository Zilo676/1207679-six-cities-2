import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/active-item/active-item';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        item: null,
      };

      this._handleActiveItem = this._handleActiveItem.bind(this);
      this._handleNotActiveItem = this._handleNotActiveItem.bind(this);

    }

    _handleActiveItem(item) {
      this.setState({
        item
      }, () => {
        this.props.onActiveItem(this.state.item);
      });
    }

    _handleNotActiveItem() {
      this.setState({
        item: null,
      }, () => {
        this.props.onActiveItem(this.state.item);
      });
    }

    render() {
      return <Component
        {...this.props}
        onActiveItem={this._handleActiveItem}
        onNotActiveItem={this._handleNotActiveItem}
      />;
    }
  }

  WithActiveItem.propTypes = {
    onActiveItem: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onActiveItem: (activeItem) => {
      dispatch(ActionCreator.setActiveItem(activeItem));
    }
  });

  return connect(null, mapDispatchToProps)(WithActiveItem);
};

export default withActiveItem;
