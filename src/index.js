import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Import Redux:
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// These are the reducers that stores the inputs from the feedback loop
const feeling = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEELING") {
    newState = [...action.payload];
  }
  return newState;
};

const understanding = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_UNDERSTANDING") {
    newState = [...action.payload];
  }
  return newState;
};

const support = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_SUPPORT") {
    newState = [...action.payload];
  }
  return newState;
};

const comments = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_COMMENTS") {
    newState = [...action.payload];
  }
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
  }),
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
