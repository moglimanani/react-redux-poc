import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './fonts/Ubuntu-Regular.ttf';
import './custom.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/es/integration/react'

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const { persistor, store } = configureStore()


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();