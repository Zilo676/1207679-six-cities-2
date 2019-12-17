import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Review} from '../review/review.jsx';
import {getComments} from '../../reducer/comments/selectors';

const MAX_COMMENTS = 10;

const ReviewList = (props) => {
  const {comments} = props;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      {comments
        .sort((a, b) => {
          return (new Date(a.date)) < (new Date(b.date)) ? 1 : -1;
        })
        .slice(0, comments.length > MAX_COMMENTS ? MAX_COMMENTS : comments.length)
        .map((review, i) => (<Review key={i} review={review} />))}
    </React.Fragment>
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
