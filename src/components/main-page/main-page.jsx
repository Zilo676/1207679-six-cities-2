import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferList} from '../offer-list/offer-list.jsx';
import Map from '../map/map.jsx';
import {CityList} from '../city-list/city-list.jsx';
import Header from '../header/header.jsx';
import SortForm from '../sort-form/sort-form.jsx';

import {offerType} from '../../prop-types/offer';

import {getSortedHotels, getCityLocation} from "../../reducer/hotels/selectors";
import {getCurrentCity, getAllCities} from "../../reducer/city/selectors";

import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withSort from '../../hocs/with-sort/with-sort.jsx';

const OfferListWrapped = withActiveItem(OfferList);
const CityListWrapped = withActiveItem(CityList);
const SortFormWrapped = withSort(SortForm);

const MainPage = (props) => {
  const {offers, city, cityLocation} = props;
  const placesMessage = (offers && offers.length > 0) ? `${offers.length} places to stay in ${city}` : `No places to stay available`;
  return (
    <div className="page page--gray page--main" >
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityListWrapped cities={props.cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesMessage}</b>
              <SortFormWrapped cssClass={`places`} />
              <OfferListWrapped offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map location={offers.map((offer) => offer.location)} city={cityLocation} cssClass={`cities`} />
            </div>
          </div>
        </div>
      </main>
    </div >
  );

};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(offerType).isRequired,
  getOffers: PropTypes.func,
  city: PropTypes.string,
  cities: PropTypes.array,
  cityLocation: PropTypes.shape(),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: getCurrentCity(state),
  offers: getSortedHotels(state),
  cities: getAllCities(state),
  cityLocation: getCityLocation(state),
});

export {MainPage};

export default connect(mapStateToProps, null)(MainPage);
