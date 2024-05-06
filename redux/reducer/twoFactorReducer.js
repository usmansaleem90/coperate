import {
    VERIFY_OTP_REQUEST,
    VERIFY_OTP_SUCCESS,
    VERIFY_OTP_FAILURE,
  } from '../actions/TwoFactorActions';
  
  const initialState = {
    isLoading: false,
    error: null,
    isOTPValid: false, // New state to track whether OTP is valid
  };
  
  const twoFactorReducer = (state = initialState, action) => {
    switch (action.type) {
      case VERIFY_OTP_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case VERIFY_OTP_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null,
          isOTPValid: true, // OTP is valid
        };
      case VERIFY_OTP_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          isOTPValid: false, // OTP is invalid
        };
      default:
        return state;
    }
  };
  
  export default twoFactorReducer;
  