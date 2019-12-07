import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainPage from '../main-page/main-page.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';

import withSignIn from '../../hocs/with-sign-in/with-sign-in';

const App = () => {

  const SignInWrapped = withSignIn(SignIn);

  return (
    <Switch>
      <Route exact path='/login' component={SignInWrapped} />
      <Route exact path='/' component={MainPage} />
    </Switch>
  );
};

export {App};
