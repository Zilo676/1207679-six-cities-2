import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Review} from '../review/review.jsx';
import {getComments} from '../../reducer/comments/selectors';

const ReviewList = (props) => {
  const {comments} = props;

  return (
    comments.map((review, i) => (<Review key={i} review={review} />))
  );
};

ReviewList.propTypes = {
  comments: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  comments: getComments(state),
});

export {ReviewList};

export default connect(mapStateToProps, null)(ReviewList);
