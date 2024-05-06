// actionTypes.js
export const FLOGIN_REQUEST = "LOGIN_REQUEST";
export const FLOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FLOGIN_FAILURE = "LOGIN_FAILURE";

// reducers.js
import { FLOGIN_REQUEST, FLOGIN_SUCCESS, FLOGIN_FAILURE } from "../actions/forgetUsernameActions";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FLOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FLOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case FLOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
