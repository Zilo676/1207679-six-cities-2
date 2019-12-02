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
            raiting={offer.raiting}
            onOfferCardHover={() => onActiveItem(offer)}
          />
        );
      })
      }
    </div>
  );

};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    raiting: PropTypes.number.isRequired,
  }
  ).isRequired
  ).isRequired,
  onActiveItem: PropTypes.func.isRequired,
};

export {OfferList};
