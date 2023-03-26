import postService from "../services/post.service";
import { ADMIN_RETRIEVE_SHOWS } from "./types";

export const getAdminRetrieveShows = () => async (dispatch) => {
  console.log("Dispatching1...");
  try {
    console.log("Dispatching...");
    const res = await postService.getAdminRetrieveShows();
    dispatch({
      type: ADMIN_RETRIEVE_SHOWS,
      payload: res.data,
    });
    //return res.data;
    //console.log(res.data);
    return Promise.resolve(res.data); 
  } catch (err) {
    //console.log(err);
    return Promise.reject(err);
  }
};
