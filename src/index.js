import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import reducers from './reducers';
import App from './components/App/App';


const store = createStore(
  reducers, // All reducers
  {}, // Initial state
  applyMiddleware(reduxThunk) // I use it for async functions
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
