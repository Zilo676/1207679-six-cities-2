import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './components/app/app.jsx';

const init = () => {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
};

init();