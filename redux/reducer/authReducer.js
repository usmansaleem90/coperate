const initialState = {
    isAuthenticated: false,
    error: null,
    isLoading: false,
    userName: "",
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          error: null,
          userName:'',
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  