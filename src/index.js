import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

import UsersIndex from "./components/Users";
import UsersNew from "./components/UsersNew";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/users/new" component={UsersNew} />
          <Route path="/" component={UsersIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
