import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers";

import getUrls from "./actions/getUrls";

import "./App.css";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
