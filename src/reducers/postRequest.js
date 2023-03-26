import { ADMIN_RETRIEVE_SHOWS } from "../actions/types";

let initialState = {};

function postRequestReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case ADMIN_RETRIEVE_SHOWS:
      console.log("type here");
      console.log(payload);
      return payload;

    default:
      return state;
  }
}

export default postRequestReducer;
