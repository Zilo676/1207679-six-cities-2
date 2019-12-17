import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/comments/comments';

const INITIAL_STATE = {
  rating: 0,
  review: ``,
  isDisabled: false,
};

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = INITIAL_STATE;

      this._ratingClickHandler = this._ratingClickHandler.bind(this);
      this._textAreaHandler = this._textAreaHandler.bind(this);
      this._sumbitHandler = this._sumbitHandler.bind(this);
      this._formHandler = this._formHandler.bind(this);
    }

    _ratingClickHandler(evt) {
      const rating = evt.target.value;
      this.setState({rating});
    }

    _textAreaHandler(evt) {
      const review = evt.target.value;
      this.setState({review});
    }

    _sumbitHandler(hotelId) {
      const {rating, review} = this.state;
      if (rating && review) {
        this.props.sendComment(hotelId, rating, review);
        this.setState(INITIAL_STATE);
      }
    }

    _isValidate() {
      return (this.state.review.length >= 50 && this.state.review.length <= 300 && this.state.rating !== 0);
    }

    _formHandler() {
      const isDisabled = this._isValidate();
      this.setState({isDisabled});
    }

    render() {
      return <Component
        {...this.props}
        onRatingClick={this._ratingClickHandler}
        onTextArea={this._textAreaHandler}
        onSubmit={this._sumbitHandler}
        isDisabled={this.state.isDisabled}
        onFormChange={this._formHandler}
      />;
    }
  }

  WithReviewForm.propTypes = {
    sendComment: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    sendComment: (hotelId, rating, comment) => {
      dispatch(Operation.sendComment(hotelId, rating, comment));
    },
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
