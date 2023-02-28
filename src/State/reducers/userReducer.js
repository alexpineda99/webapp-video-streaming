import { LOGUSER, LOGUSER_KEEPSESSION, LOGOUT } from "../types";

let initialState = {
  user: null,
  keepSessionAlive: false,
};

export default function userStatus(state = initialState, action) {
  switch (action.type) {
    case LOGUSER:
      return {...state, user: action.payload, keepSessionAlive: false};
      break;
    case LOGUSER_KEEPSESSION:
      return {...state, user: action.payload, keepSessionAlive: true};
      break;
    case LOGOUT:
      return state;
      break;
    default:
      return state;
  }
}
