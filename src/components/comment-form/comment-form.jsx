import React from 'react';
import PropTypes from 'prop-types';

const CommentForm = (props) => {

  const {onRatingClick, onTextArea, onSubmit, hotelId, isDisabled, onFormChange} = props;

  return (

    <form className="reviews__form form" onChange={() => onFormChange()}
      onSubmit={(evt) => {
        evt.preventDefault();
        evt.target.reset();
        onSubmit(hotelId);
      }
      }
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {/* TODO: Optimize */}
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onClick={(evt) => onRatingClick(evt)} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onClick={(evt) => onRatingClick(evt)} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onClick={(evt) => onRatingClick(evt)} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onClick={(evt) => onRatingClick(evt)} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onClick={(evt) => onRatingClick(evt)} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt) => onTextArea(evt)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled ? false : true} >Submit</button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  onRatingClick: PropTypes.func.isRequired,
  onTextArea: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  hotelId: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export {CommentForm};
