import React from 'react';
import PropTypes from 'prop-types';

const convertRatingToStyle = (rating) => {
  return rating ? Math.round(rating) * 20 : 0;
};

const Rating = (props) => {
  const {rating} = props;

  return (
    <React.Fragment>
      <span style={{width: `${convertRatingToStyle(rating)}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </React.Fragment>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export {Rating};
