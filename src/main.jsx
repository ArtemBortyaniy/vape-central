import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';

import './index.css';
import { Provider } from 'react-redux';

import {  store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>

    <BrowserRouter basename="/vape-central/">
      <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
