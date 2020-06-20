import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Import Redux:
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// This is the reducer that stores the inputs from the feedback loop
const feedbackReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEEDBACK") {
    newState = [...action.payload];
  }
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
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
