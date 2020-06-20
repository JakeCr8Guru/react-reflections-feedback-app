import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Import Redux:
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const storeInstance = createStore(
  combineReducers({}),
  // redux devtools (browser extension): could also do redux logger here
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();