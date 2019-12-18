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

      this.handleClickRating = this.handleClickRating.bind(this);
      this.handleAreaText = this.handleAreaText.bind(this);
      this.handleSumbit = this.handleSumbit.bind(this);
      this.handleForm = this.handleForm.bind(this);
    }

    handleClickRating(evt) {
      const rating = evt.target.value;
      this.setState({rating});
    }

    handleAreaText(evt) {
      const review = evt.target.value;
      this.setState({review});
    }

    handleSumbit(hotelId) {
      const {rating, review} = this.state;
      if (rating && review) {
        this.props.sendComment(hotelId, rating, review);
        this.setState(INITIAL_STATE);
      }
    }

    isValidate() {
      return (this.state.review.length >= 50 && this.state.review.length <= 300 && this.state.rating !== 0);
    }

    handleForm() {
      const isDisabled = this.isValidate();
      this.setState({isDisabled});
    }

    render() {
      return <Component
        {...this.props}
        onRatingClick={this.handleClickRating}
        onTextArea={this.handleAreaText}
        onSubmit={this.handleSumbit}
        isDisabled={this.state.isDisabled}
        onFormChange={this.handleForm}
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
