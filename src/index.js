import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss';
import 'normalize.css';

import App from './views/App/App';
import ErrorPage from './components/errorPage/errorPage';
import FilmPage from './views/filmPage/filmPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "film/:filmId",
    element: <FilmPage />,
  },
], {
  basename: "/"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
