import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferList} from '../offer-list/offer-list.jsx';
import {Map} from '../map/map.jsx';
import {CityList} from '../city-list/city-list.jsx';
import Header from '../header/header.jsx';
import SortForm from '../sort-form/sort-form.jsx';

import {getSortedHotels, getCityLocation} from "../../reducer/hotels/selectors";
import {getCurrentCity, getAllCities} from "../../reducer/city/selectors";

import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withSort from '../../hocs/with-sort/with-sort';

const OfferListWrapped = withActiveItem(OfferList);
const CityListWrapped = withActiveItem(CityList);
const SortFormWrapped = withSort(SortForm);

const MainPage = (props) => {

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
              <b className="places__found">{props.offers.length} places to stay in {props.city}</b>
              <SortFormWrapped cssClass={`places`} />
              <OfferListWrapped offers={props.offers} />
            </section>
            <div className="cities__right-section">
              <Map location={props.offers.map((offer) => offer.location)} city={props.cityLocation} cssClass={`cities`} />
            </div>
          </div>
        </div>
      </main>
    </div >
  );

};

MainPage.propTypes = {
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
  ).isRequired
  ).isRequired,
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
