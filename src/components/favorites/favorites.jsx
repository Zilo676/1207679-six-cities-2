import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferList} from '../offer-list/offer-list.jsx';
import Header from '../header/header.jsx';
import {FavoritesEmpty} from '../favorites-empty/favorites-empty.jsx';

import {getFavoritesByCities, getFavorites} from '../../reducer/favorites/selectors.js';
import {getAllCities} from '../../reducer/city/selectors';

const Favorites = (props) => {
  const {allCities, favorites, allFavorites} = props;
  return (
    <React.Fragment>
      <div className="page__favorites-container container">
        <Header />
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">

          {allFavorites.length === 0 && <FavoritesEmpty />}
          {(allFavorites.length !== 0 &&
            allCities.map((city, i) => {
              return (favorites[city].length > 0 &&
                <li key={city + i} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferList offers={favorites[city]} onActiveItem={() => {}} onNotActiveItem={() => {}} />
                  </div>
                </li>
              )
            })
          )}
        </ul>
      </div>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </React.Fragment>
  );
}

Favorites.propTypes = {
  allCities: PropTypes.array,
  favorites: PropTypes.shape(),
}

const mapStateTpProps = (state, ownProps) => Object.assign({}, ownProps, {
  allCities: getAllCities(state),
  favorites: getFavoritesByCities(state),
  allFavorites: getFavorites(state),
});

export default connect(mapStateTpProps, null)(Favorites);

export {Favorites}
