import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../header/header.jsx';
import {NotLoad} from '../not-load/not-load.jsx';
import {Rating} from '../rating/rating.jsx';
import ReviewList from '../review-list/review-list.jsx';
import {OfferList} from '../offer-list/offer-list.jsx';
import {Map} from '../map/map.jsx';

import {getHotelById, getRandomHotels, getCityLocation} from '../../reducer/hotels/selectors.js';
import {Operation} from '../../reducer/comments/comments';

const OfferDetails = (props) => {

  if (props.offer) {
    const {onClick, id, nearOffers} = props;
    const {description, rating, type, bedrooms, price, goods, images, host , isPremium, maxAdults} = props.offer;

    return (
      <div className="page" onScroll={() => onClick(id)}>
        <Header />

        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((it, i) => (
              <div key={i + it.toString()} className="property__image-wrapper">
                <img className="property__image" src={it} alt="img/room.jpg" />
              </div>))
            }
          </div>
        </div>

        <div className="property__container container">
          <div className="property__wrapper">
            {
              isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {description}
              </h1>
            </div>

            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <Rating rating={rating}/>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>

            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${bedrooms} Bedrooms`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${maxAdults} adults`}
              </li>
            </ul>

            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>

            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((it, i) => (<li key={i + it.toString()} className="property__inside-item">{it}</li>))}
              </ul>
            </div>

            <div className="property__host" onClick={()=>onClick(id)}>
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`/` + host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>
                }
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>

            <ReviewList />

            <Map location={nearOffers.map((it) => it.location)} city={props.cityLocation} cssClass={`property`} />

            <OfferList onActiveItem={() => {}} offers={nearOffers} />

          </div>
        </div>
      </div>
    );
  }
  return <NotLoad />;
};

OfferDetails.propTypes = {
  id: PropTypes.number.isRequired,
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
  onClick: PropTypes.func,
  nearOffers: PropTypes.array,
  cityLocation: PropTypes.shape(),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: getHotelById(state, ownProps),
  nearOffers: getRandomHotels(state),
  cityLocation: getCityLocation(state),
}
);

const mapDispatchToProps = (dispatch) => ({
  onClick: (hotelId) => {
    dispatch(Operation.loadComments(hotelId));
  }
});

export {OfferDetails};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
