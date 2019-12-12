import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from "../header/header.jsx";
import {NotLoad} from '../not-load/not-load.jsx';

import {getHotelById} from '../../reducer/hotels/selectors.js';

const OfferDetails = (props) => {

  if (props.offer) {
    const {description, rating, type, bedrooms, price, goods, images, host} = props.offer;
    const isPremium = props.offer[`is_premium`];
    const maxAdults = props.offer[`max_adults`];

    return (
      <div className="page">
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
                {/* TODO: add rounding */}
                <span style={{width: `96%`}}></span>
                <span className="visually-hidden">Rating</span>
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

            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`/` + host[`avatar_url`]} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host[`is_pro`] &&
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
        [`preview_image`]: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        [`is_favorite`]: PropTypes.bool.isRequired,
        [`is_premium`]: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        [`max_adults`]: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired),
        host: PropTypes.shape({
          id: PropTypes.number.isRequired,
          [`is_pro`]: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          [`avatar_url`]: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        })
      }
  ),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: getHotelById(state, ownProps),
}
);

export {OfferDetails};

export default connect(mapStateToProps, null)(OfferDetails);
