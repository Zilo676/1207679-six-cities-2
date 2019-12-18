import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Redirect} from 'react-router-dom';
import {Path} from '../../api';

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.isAuthorizationRequired) {
        return <Redirect to={Path.LOGIN} />;
      } else {
        return <Component
          {...this.props}
        />;
      }
    }
  }

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired,
  };

  const mapStateTpProps = (state, ownProps) => Object.assign({}, ownProps, {
    isAuthorizationRequired: getAuthorizationStatus(state),
  });

  return connect(mapStateTpProps)(WithAuth);
};

export default withAuth;
