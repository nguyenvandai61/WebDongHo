import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Root from '../src/Root';

import './index.scss';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('item-gallery')
);
