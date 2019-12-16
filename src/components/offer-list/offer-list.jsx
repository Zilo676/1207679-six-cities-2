import React from "react";
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

import {offerType} from '../../prop-types/offer';

const OfferList = (props) => {
  const {offers, onActiveItem, onNotActiveItem} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.slice().reverse().map((offer) => {
        return (
          <OfferCard
            key={offer.id}
            offer={offer}
            onOfferCardHover={() => onActiveItem(offer)}
            onOfferCardLeave={onNotActiveItem}
          />
        );
      })
      }
    </div>
  );

};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  onActiveItem: PropTypes.func.isRequired,
  onNotActiveItem: PropTypes.func.isRequired,
};

export {OfferList};
