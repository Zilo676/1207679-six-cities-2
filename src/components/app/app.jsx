import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import Favorites from '../favorites/favorites.jsx';

import withSignIn from '../../hocs/with-sign-in/with-sign-in';
import withAuth from '../../hocs/with-auth/with-auth';

const App = () => {

  const SignInWrapped = withSignIn(SignIn);
  const FavoritesWrapped = withAuth(Favorites);
  const OfferDetailsWrapped = withAuth(OfferDetails);

  return (
    <Switch>
      <Route exact path='/login' component={SignInWrapped} />
      <Route exact path='/offer/:id' render={({match}) => <OfferDetailsWrapped id={+match.params.id} />} />
      <Route exact path='/favorites' component={FavoritesWrapped} />
      <Route exact path='/' component={MainPage} />
    </Switch>
  );
};

export {App};
