import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import Favorites from '../favorites/favorites.jsx';
import {Path} from '../../api';

import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import withAuth from '../../hocs/with-auth/with-auth';

const App = () => {

  const SignInWrapped = withSignIn(SignIn);
  const FavoritesWrapped = withAuth(Favorites);

  return (
    <Switch>
      <Route exact path={Path.LOGIN} component={SignInWrapped} />
      <Route exact path={`${Path.OFFER_DETAILS}/:id`} render={({match}) => <OfferDetails id={+match.params.id} />} />
      <Route exact path={Path.FAVORITES} component={FavoritesWrapped} />
      <Route exact path={Path.MAIN_PAGE} component={MainPage} />
    </Switch>
  );
};

export {App};
