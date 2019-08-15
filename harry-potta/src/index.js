import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from 'redux-thunk';

import { harryPotterReducer } from "./reducers";


export const store = createStore(harryPotterReducer, applyMiddleware(thunk));
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);