import axios from 'axios';
import Toast  from "../../components/Toast/Toast";

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
        window.localstorage.setItem("token", response.data.tokenDto.token);
        window.localstorage.setItem("expirydate", response.data.tokenDto.
        expiryInMinutes);

        window.localstorage.setItem("userData", JSON.stringify(response.data));

        
        // Dispatching an action to indicate successful login
        dispatch(loginSuccess(userName));
        const validate = response.data.tokenDto.googleAuthenticationEnabled
        // Navigating to different pages based on conditions
        if ( validate=== false) {
          Toast( "sucess" ,'Login sucessfully');

          router.push("/first-time-login");
          
        } else {
          Toast( "sucess" ,'Login sucessfully');

          router.push("/login/two-factor");
        }
      })
      .catch((error) => {
       Toast("err" ,"Invalid email and password")
        console.error("Error during login request:", error);
        
        // Dispatching an action to indicate login failure
        dispatch(loginFailure("An error occurred"));
      });
  };
};
