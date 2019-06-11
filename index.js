import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore, { sagaMiddleware } from './src/store';
import rootSaga from './sagas/rootSaga';

const store = configureStore()

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent(appName, () => RNRedux);