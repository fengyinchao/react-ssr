import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import { create } from "./redux/store/create";

console.log("object", window.__STORE__);
const defaultStore = window.__STORE__ || {};
const store = create(defaultStore);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
