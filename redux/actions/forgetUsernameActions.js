// actionTypes.js
export const FLOGIN_REQUEST = "LOGIN_REQUEST";
export const FLOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FLOGIN_FAILURE = "LOGIN_FAILURE";

import axios from "axios";

export const LoginRequest = (email, otp) => {
  return async (dispatch) => {
    dispatch({ type: FLOGIN_REQUEST });
    try {
      const response = await axios.post("https://oxygentestenv01.oxygen-global.com/cardholderadmin/corporateOrdering/validate/totp/ForgotUserId", { email, otp });

      // Save email to local storage
      window.localstorage.setItem("email", email);

      dispatch({ type: FLOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FLOGIN_FAILURE, payload: error.message });
    }
  };
};
