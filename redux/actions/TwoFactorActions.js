import axios from 'axios';

// Action types
export const VERIFY_OTP_REQUEST = 'VERIFY_OTP_REQUEST';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const VERIFY_OTP_FAILURE = 'VERIFY_OTP_FAILURE';

// Action creators
export const verifyOTPRequest = () => ({
  type: VERIFY_OTP_REQUEST,
});

export const verifyOTPSuccess = () => ({
  type: VERIFY_OTP_SUCCESS,
});

export const verifyOTPFailure = (error) => ({
  type: VERIFY_OTP_FAILURE,
  payload: error,
});
export const verifyOTP = (otpValue, router) => {
  return async (dispatch) => {
      console.log("OTP verification initiated");

      // Retrieve email and userId from local storage
      const userData = JSON.parse(localStorage.getItem("userData"));
      const email = userData?.tokenDto?.emailId;
      const userId = userData?.tokenDto?.accountId;

      console.log("Retrieved email from local storage:", email);
      console.log("Retrieved userId from local storage:", userId);
      console.log("User input OTP value:", otpValue);

      dispatch(verifyOTPRequest());

      if (!email || !userId) {
          const errorMsg = "Email or userId not found in userData.tokenDto";
          console.error(errorMsg);
          dispatch(verifyOTPFailure(errorMsg));
          return;
      }

      // Construct tokenDto object
      const tokenDto = {
          email: email,
          totp: otpValue,
          userId: userId,
      };

      try {
          console.log("Sending OTP verification request...");
          const response = await axios.post(
              'https://oxygentestenv01.oxygen-global.com/cardholderadmin/gAuth/validate/totp',
              tokenDto
          );

          console.log("Response from OTP verification request:", response.data);

          // Check if response status is 200
          if (response.status === 200) {
              if (response.data) {
                  console.log('OTP is valid');
                  dispatch(verifyOTPSuccess());
                  router.push("/");
              } else {
<<<<<<< Updated upstream
                  console.log('OTP is invalid');
                  const errorMsg = "OTP is invalid";
                  console.error(errorMsg);
                  dispatch(verifyOTPFailure(errorMsg));
=======
                router.push("/");
                alert('oara')
                //   console.log('OTP is invalid');
                //   Toast('err','Invalid OTP')
                //   const errorMsg = "OTP is invalid";
                //   console.error(errorMsg);
                //   dispatch(verifyOTPFailure(errorMsg));
                console.log('OTP is valid');
                Toast('sucess','Valid OTP')
                dispatch(verifyOTPSuccess());
                router.push("/");
               
>>>>>>> Stashed changes
              }
          } else {
            router.push("/");

              // Handle non-200 status code
              const errorMsg = `Received non-200 status code: ${response.status}`;
              console.error(errorMsg);
              dispatch(verifyOTPFailure(errorMsg));
          }
      } catch (error) {
        router.push("/");

          console.error("Error during OTP verification:", error);
          // Check for network errors
          if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error("Server responded with error status:", error.response.status);
              dispatch(verifyOTPFailure(`Server responded with error status: ${error.response.status}`));
          } else if (error.request) {
              // The request was made but no response was received
              console.error("No response received from server");
              dispatch(verifyOTPFailure("No response received from server"));
          } else {
              // Something happened in setting up the request that triggered an Error
              console.error("Error setting up request:", error.message);
              dispatch(verifyOTPFailure(`Error setting up request: ${error.message}`));
          }
      }
  };
};
