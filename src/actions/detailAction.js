import axios from "axios";
// here we fetch th e api data and dispatch it
import { gameDetailsURL, gameScreenShotURL } from "../api";
export const loadDetail = (id) => async (dispatch) => {
  // dispatch loading detail

  dispatch({
    type: "LOADING_DETAIL",
  });

  // getting data
  const detailData = await axios.get(gameDetailsURL(id));
  // screen
  const screenShotData = await axios.get(gameScreenShotURL(id));
  // dispatch
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData,
    },
  });
};
