import {
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAILURE,
  } from '../actions/changePasswordActions';
  
  // Initial state
  const initialState = {
    loading: false,
    error: null,
  };
  
  // Reducer function
  const changePasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case CHANGE_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case CHANGE_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default changePasswordReducer;
  