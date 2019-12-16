import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Operation} from '../../reducer/favorites/favorites';
import {Rating} from '../rating/rating.jsx';

const OfferCard = (props) => {
  const {offer, onOfferCardHover, onClick, onOfferCardLeave} = props;
  const handleOfferCardHover = (evt) => {
    evt.preventDefault();
    onOfferCardHover(offer);
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleOfferCardHover} onMouseLeave={onOfferCardLeave}>
      <div className="place-card__mark" >
        <span>{offer.isPremium ? `Premium` : `Not premium`}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button" onClick={(evt) => {
            evt.preventDefault();
            onClick(offer.id, !offer.isFavorite | 0);
          }}>
            <svg className="place-card__bookmark-icon" width="18" height="19" style= {{fill: offer.isFavorite ? `#4481c3` : `none`}}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating rating={offer.rating}/>
          </div>
        </div>
        <h2 className="place-card__name" >
          <Link to={`/offer/${+offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          location: PropTypes.shape({
            latitude: PropTypes.number.isRequired,
            longitude: PropTypes.number.isRequired,
            zoom: PropTypes.number.isRequired,
          })
        }),
        previewImage: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        isPremium: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired),
        host: PropTypes.shape({
          id: PropTypes.number.isRequired,
          isPro: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        })
      }
  ),
  onOfferCardHover: PropTypes.func.isRequired,
  onOfferCardLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (hotelId, status) =>{
    dispatch(Operation.changeFavoriteStatus(hotelId, status));
  },
});

export {OfferCard};

export default connect(null, mapDispatchToProps)(OfferCard);
