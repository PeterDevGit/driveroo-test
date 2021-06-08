import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./Redux/reducer";

import {Provider} from "react-redux";
import App from './Components/App/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
            <Route component={App} />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
