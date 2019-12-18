import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {compose} from 'recompose';
import {createBrowserHistory} from 'history';

import {App} from './components/app/app.jsx';
import reducer from './reducer/index';
import {createAPI} from './api';
import {Operation as hotelsOperation} from './reducer/hotels/hotels';
import {Operation as userOperation} from './reducer/user/user';
import {Operation as favoritesOperation} from './reducer/favorites/favorites';

const init = () => {
  const history = createBrowserHistory();
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(hotelsOperation.loadHotels());
  store.dispatch(userOperation.checkAutorize());
  store.dispatch(favoritesOperation.loadFavorites());

  ReactDOM.render(<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
