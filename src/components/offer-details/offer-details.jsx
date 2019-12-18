import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Path} from '../../api';

import Header from '../header/header.jsx';
import {NotLoad} from '../not-load/not-load.jsx';
import {Rating} from '../rating/rating.jsx';
import ReviewList from '../review-list/review-list.jsx';
import {OfferList} from '../offer-list/offer-list.jsx';
import Map from '../map/map.jsx';
import {CommentForm} from '../comment-form/comment-form.jsx';

import {offerType} from '../../prop-types/offer';

import {getHotelById, getRandomHotels, getCityLocation, getHotels} from '../../reducer/hotels/selectors.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operation as commentsOperation} from '../../reducer/comments/comments';
import {Operation as favoritesOperation} from '../../reducer/favorites/favorites';
import {Operation as hotelsOperation} from '../../reducer/hotels/hotels'

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withReviewForm from '../../hocs/with-review-form/with-review-form';

const OfferListWrapped = withActiveItem(OfferList);
const MAX_IMAGES = 6;

const CommentFormWrapped = withReviewForm(CommentForm);

class OfferDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    this._generateNearHotels = this._generateNearHotels.bind(this);
  }

  componentDidUpdate() {
    this.props.loadComments(this.props.id);
  }

  componentDidMount() {
    this.props.loadComments(this.props.id);
    this.props.loadHotels();
  }

  _generateNearHotels() {
    const maxElements = 3;
    let nearOffers = []

    if (this.props.hotels) {
      let hotelsByCity = this.props.hotels.filter((it) => this.props.offer.city.name === it.city.name)
      hotelsByCity.forEach(element => {
        if (nearOffers.length < maxElements && element.id !== this.props.offer.id) {
          nearOffers.push(element);
        }
      });
    }
    return nearOffers;
  }

  render() {
    if (this.props.offer) {
      const {onButtonClick, id, offer, isAutorizationRequired} = this.props;
      const {description, rating, type, bedrooms, price, goods, host, isPremium, maxAdults, title} = offer;
      const images = offer.images.length > MAX_IMAGES ? offer.images.slice(0, MAX_IMAGES) : offer.images;
      const nearOffers = this._generateNearHotels();

      return (
        <div className="page" >
          <Header />

          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((it, i) => (
                <div key={i + it.toString()} className="property__image-wrapper">
                  <img className="property__image" src={it} alt="/img/room.jpg" />
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
                  {title}
                </h1>
                {
                  !isAutorizationRequired &&
                  <button className="property__bookmark-button property-card__bookmark-button--active button" type="button" onClick={(evt) => {
                    evt.preventDefault();
                    onButtonClick(offer.id, !offer.isFavorite | 0);
                  }}>
                    <svg className="property__bookmark-icon" width="40" height="40" style={{fill: offer.isFavorite ? `#4481c3` : `none`}}>
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                }
              </div>

              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <Rating rating={rating} />
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

              <div className="property__host" >
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

              <div className="property__reviews reviews">
                <ReviewList />
                {
                  !isAutorizationRequired &&
                  <CommentFormWrapped hotelId={id} />
                }
              </div>

              <Map
                location={nearOffers.map((it) => it.location)}
                city={{location: offer.location, city: offer.city.name}}
                cssClass={`property`}
                offerDetailsItem={{latitude: offer.location.latitude, longitude: offer.location.longitude}}
              />

              <OfferListWrapped offers={nearOffers} />

            </div>
          </div>
        </div>
      );
    }
    return <NotLoad />;
  }
}

OfferDetails.propTypes = {
  id: PropTypes.number.isRequired,
  offer: offerType,
  loadComments: PropTypes.func,
  hotels: PropTypes.array,
  cityLocation: PropTypes.shape(),
  isAutorizationRequired: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  loadHotels: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offer: getHotelById(state, ownProps),
  hotels: getHotels(state),
  cityLocation: getCityLocation(state),
  isAutorizationRequired: getAuthorizationStatus(state),
}
);

const mapDispatchToProps = (dispatch) => ({
  loadComments: (hotelId) => {
    dispatch(commentsOperation.loadComments(hotelId));
  },
  onButtonClick: (hotelId, status) => {
    dispatch(favoritesOperation.changeFavoriteStatus(hotelId, status));
  },
  loadHotels: () => {
    dispatch(hotelsOperation.loadHotels());
  },
});

export {OfferDetails};

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
