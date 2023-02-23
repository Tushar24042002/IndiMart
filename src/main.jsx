import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./redux/store";
import { store } from "./redux/store";
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-vdfb4mxuobkgtjuf.us.auth0.com"
    clientId="Ozznjv2Ru9ErtTct5jXPfZGH7XMVz96g"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>

    </Provider>
  </Auth0Provider>
  // </React.StrictMode>
  // </BrowserRouter>

);