import axios from 'axios';

// Action creators
export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSuccess = (userName) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    userName: userName,
  },
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

// Async action creator
export const loginUser = (userName, password, router) => {
  return (dispatch) => {
    // Dispatching an action to indicate that login request is in progress
    dispatch(loginRequest());
    
    // Sending a POST request to the authentication endpoint
    axios
      .post(
        "https://oxygentestenv01.oxygen-global.com/cardholderadmin/public/token",
        { userName, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // Storing user data in local storage
        localStorage.setItem("userData", JSON.stringify(response.data));
        
        // Dispatching an action to indicate successful login
        dispatch(loginSuccess(userName));
        
        // Navigating to different pages based on conditions
        if (response.data.tokenDto.googleAuthenticationEnabled === false) {
          // If Google authentication is disabled, navigate to first-time-login
          router.push("/first-time-login");
        } else {
          // If Google authentication is enabled, navigate to verify-totp
          router.push("/login/two-factor");
        }
      })
      .catch((error) => {
        // Handling errors during login
        console.error("Error during login request:", error);
        
        // Dispatching an action to indicate login failure
        dispatch(loginFailure("An error occurred"));
      });
  };
};
