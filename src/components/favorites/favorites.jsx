import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {Path} from '../../api';

import {OfferList} from '../offer-list/offer-list.jsx';
import Header from '../header/header.jsx';
import {FavoritesEmpty} from '../favorites-empty/favorites-empty.jsx';

import {getFavoritesByCities, getFavorites} from '../../reducer/favorites/selectors.js';
import {getAllCities} from '../../reducer/city/selectors';
import {ActionCreator} from '../../reducer/city/city';

const Favorites = (props) => {
  const {allCities, favorites, allFavorites, onClick} = props;
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
                      <Link className="locations__item-link" to={Path.MAIN_PAGE}><span onClick={() => onClick(city)}>{city}</span></Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferList offers={favorites[city]} onActiveItem={() => {}} onNotActiveItem={() => {}} />
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <footer className="footer container">
        <Link to={Path.MAIN_PAGE} className="footer__logo-link">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  allCities: PropTypes.array,
  favorites: PropTypes.shape(),
  onClick: PropTypes.func,
  allFavorites: PropTypes.shape(),
};

const mapStateTpProps = (state, ownProps) => Object.assign({}, ownProps, {
  allCities: getAllCities(state),
  favorites: getFavoritesByCities(state),
  allFavorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => {
    dispatch(ActionCreator.setCity(city));
  },
});

export default connect(mapStateTpProps, mapDispatchToProps)(Favorites);

export {Favorites};
