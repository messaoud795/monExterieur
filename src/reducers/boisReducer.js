import {
  BOIS_LOAD_ERROR,
  BOIS_LOAD_START,
  BOIS_LOAD_SUCCESS,
} from "../actions/actionsTypes";

const initialState = { products: null, loadingBois: false, error: null };

export const boisReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //request sent
    case BOIS_LOAD_START:
      return (state = { ...state, loadingBois: true });
    //response received successfully
    case BOIS_LOAD_SUCCESS:
      return (state = {
        loadingGoal: false,
        error: null,
        products: payload,
      });
    //error with request
    case BOIS_LOAD_ERROR:
      return (state = { ...state, loadingBois: false, error: payload });
    // return initial state
    default:
      return state;
  }
};
