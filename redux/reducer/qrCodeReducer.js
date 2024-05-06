// Import action types
import {
    FETCH_QR_CODE_REQUEST,
    FETCH_QR_CODE_SUCCESS,
    FETCH_QR_CODE_FAILURE,
  } from "../actions/qrCodeAction";
  
  // Initial State
  const initialState = {
    url: "",
    loading: false,
    error: "",
  };
  
  // Reducer Function
  const qrCodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QR_CODE_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case FETCH_QR_CODE_SUCCESS:
        return {
          ...state,
          loading: false,
          url: action.payload,
        };
      case FETCH_QR_CODE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default qrCodeReducer;
  