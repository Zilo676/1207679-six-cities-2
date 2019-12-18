import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/user/user';

const withSignIn = (Component) => {
  class WithSignIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field, value) {
      this.setState({
        [field]: value,
      });
    }

    render() {
      const {onSubmit} = this.props;

      return <Component
        {...this.props}
        onChange={this.handleInput}
        onSubmit={onSubmit}
        email={this.state.email}
        password={this.state.password}
      />;
    }
  }

  WithSignIn.propTypes = {
    onSubmit: PropTypes.func,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, password) => {
      dispatch(Operation.autorize(email, password));
    },
  });

  return connect(null, mapDispatchToProps)(WithSignIn);
};

export default withSignIn;
