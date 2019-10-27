import React from "react";
import PropTypes from 'prop-types';

import {OfferCard} from '../offer-card/offer-card.jsx';

class OfferList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      offer: null,
    };
    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  handleOfferCardHover(evt, offer) {
    this.setState({
      offer: {offer}
    });
  }

  render() {
    const {offers} = this.props;

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
              onOfferCardHover={this.handleOfferCardHover}
            />
          );
        })
        }
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            raiting: PropTypes.number.isRequired,
          }
      ).isRequired
  ).isRequired
};

export {OfferList};
