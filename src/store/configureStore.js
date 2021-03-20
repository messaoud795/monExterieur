import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const configureStore = () => {
  //set thunk middleware with redux dev tools
  const middlewares = [thunk];
  const conposedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, conposedEnhancer);
  return store;
};
