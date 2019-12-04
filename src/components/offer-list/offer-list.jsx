import React from "react";
import PropTypes from 'prop-types';

import {OfferCard} from '../offer-card/offer-card.jsx';

const OfferList = (props) => {
  const {offers, onActiveItem} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => {
        return (
          <OfferCard
            key={offer.id}
            type={offer.type}
            price={offer.price}
            description={offer.description}
            raiting={offer.rating}
            onOfferCardHover={() => onActiveItem(offer)}
          />
        );
      })
      }
    </div>
  );

};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(
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
        images: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string.isRequired),
        host: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }),
        description: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        })
      }
  ).isRequired
  ).isRequired,
  onActiveItem: PropTypes.func.isRequired,
};

export {OfferList};
