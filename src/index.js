import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Import Redux:
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// These are the reducers that stores the inputs from the feedback loop
const feeling = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_FEELING") {
    newState = Number(action.payload);
  } else if (action.type === "REST_LOOP") {
    newState = action.payload;
  }
  return newState;
};

const understanding = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_UNDERSTANDING") {
    newState = Number(action.payload);
  } else if (action.type === "REST_LOOP") {
    newState = action.payload;
  }
  return newState;
};

const support = (state = null, action) => {
  let newState = state;
  if (action.type === "ADD_SUPPORT") {
    newState = Number(action.payload);
  } else if (action.type === "REST_LOOP") {
    newState = action.payload;
  }
  return newState;
};

const comments = (state = '', action) => {
  let newState = state;
  if (action.type === "ADD_COMMENTS") {
    newState = action.payload;
  } else if (action.type === "REST_LOOP") {
    newState = action.payload;
  }
  return newState;
};

const feedback = (state = [], action) => {
  let newState = [...state];
  if (action.type === "ADD_FEEDBACK") {
    newState = [...state, action.payload];
  }
  return newState;
}

// This reducer may reset state, but I am not sure
const appReducer = combineReducers({
  feeling,
  understanding,
  support,
  comments,
});

const rootReducer = (state, action) => {
  if (action.type === "REST_LOOP") {
    state = undefined;
  }

  return appReducer(state, action);
};

const storeInstance = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
    rootReducer,
    feedback,
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
