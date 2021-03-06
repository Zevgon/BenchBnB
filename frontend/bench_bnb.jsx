import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import SearchContainer from './components/search_container';

//for testing
import {fetchBenches} from './util/bench_api_util';

const Root = () => (
  <Provider store={configureStore()}>
    <SearchContainer />
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root/>, root);

  window.store = configureStore();
  window.fetchBenches = fetchBenches;
});
