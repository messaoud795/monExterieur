import axios from "axios";
import {
  BOIS_LOAD_ERROR,
  BOIS_LOAD_START,
  BOIS_LOAD_SUCCESS,
} from "./actionsTypes";

//get data from the fake API
export const loadBois = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: BOIS_LOAD_START });
      const { data } = await axios.get("https://api.mocki.io/v1/af37df01");

      //removing the element where the url of picture is not working
      data.splice(0, 1);
      data.splice(1, 1);

      dispatch({ type: BOIS_LOAD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: BOIS_LOAD_ERROR, payload: error });
    }
  };
};
