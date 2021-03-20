import { boisReducer } from "./boisReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  bois: boisReducer,
});

export default rootReducer;
