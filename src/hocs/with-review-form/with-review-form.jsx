import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from '../../reducer/comments/comments';
import {getBlockStatus} from '../../reducer/comments/selectors';

const INITIAL_STATE = {
  rating: 0,
  review: ``,
  isDisabled: false,
  error: ``
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
      const rating = +evt.target.value;
      this.setState({rating}, () => {
        this.handleForm();
      });
    }

    handleAreaText(evt) {
      const review = evt.target.value;
      this.setState({review}, () => {
        this.handleForm();
      });
    }

    handleSumbit(hotelId) {
      const {rating, review} = this.state;
      if (rating && review) {
        const onSucc = () => this.setState(INITIAL_STATE);
        const onFail = (error) => (this.setState({error}));
        this.props.sendComment(hotelId, rating, review, {onFail, onSucc});
      }
    }

    isValidate() {
      return (this.state.review.length >= 50 && this.state.review.length <= 300 && this.state.rating !== 0 && this.props.isBlock !== true);
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
        rating={this.state.rating}
      />;
    }
  }

  WithReviewForm.propTypes = {
    sendComment: PropTypes.func.isRequired,
    isBlock: PropTypes.bool,
  };

  const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    isBlock: getBlockStatus(state),
  }
  );

  const mapDispatchToProps = (dispatch) => ({
    sendComment: (hotelId, rating, comment, options) => {
      dispatch(Operation.sendComment(hotelId, rating, comment, options));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;
