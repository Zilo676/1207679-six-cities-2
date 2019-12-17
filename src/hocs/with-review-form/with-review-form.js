import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Operation } from '../../reducer/comments/comments';

const withReviewForm = (Component) => {
  class WithReviewForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        review: ''
      };

      this._ratingClickHandler = this._ratingClickHandler.bind(this);
      this._textAreaHandler = this._textAreaHandler.bind(this);
      this._sumbitHandler = this._sumbitHandler.bind(this);
    }

    _ratingClickHandler(evt) {
      const rating = evt.target.value;
      this.setState({ rating });
    }

    _textAreaHandler(evt) {
      const review = evt.target.value;
      this.setState({ review });
    }

    _sumbitHandler(hotelId) {
      const { rating, review } = this.state;
      console.log({ rating, review });
      if (rating && review)
        this.props.sendComment(hotelId, rating, review);
      else
        alert(`Fill form`);
    }

    render() {
      return <Component
        {...this.props}
        onRatingClick={this._ratingClickHandler}
        onTextArea={this._textAreaHandler}
        onSubmit={this._sumbitHandler}
      />;
    }
  }

  WithReviewForm.propTypes = {
    sendComment: PropTypes.func.isRequired,
  }

  const mapDispatchToProps = (dispatch) => ({
    sendComment: (hotelId, rating, comment) => {
      dispatch(Operation.sendComment(hotelId, rating, comment));
    },
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
}

export default withReviewForm;
