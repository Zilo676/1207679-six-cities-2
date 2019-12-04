import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {compose} from 'recompose';

import {App} from './components/app/app.jsx';
import reducer from './reducer/index';
import {createAPI} from './api';
import {Operation} from './reducer/hotels/hotels';

const init = () => {
  const api = createAPI((...args) => store.dispath(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(Operation.loadHotels());

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
