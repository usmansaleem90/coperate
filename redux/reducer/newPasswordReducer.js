import {
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAILURE,
  } from '../actions/newPasswordActions';
  
  // Initial state
  const initialState = {
    loading: false,
    error: null,
  };
  
  // Reducer function
  const newPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEW_PASSWORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case NEW_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
        };
      case NEW_PASSWORD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default newPasswordReducer;
  