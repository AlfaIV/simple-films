import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './views/App/App';
import 'normalize.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
