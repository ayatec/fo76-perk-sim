
// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// React hot loader
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

// App
import Application from './components/templates/Application';
import store from './store';

const entryNode = document.getElementById('root');

// render
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Application />
    </Provider>
  </AppContainer>,
  entryNode,
);
