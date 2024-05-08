// Import any necessary dependencies
import axios from "axios";
import Cookies from "js-cookie";

// Action Types
export const FETCH_QR_CODE_REQUEST = "FETCH_QR_CODE_REQUEST";
export const FETCH_QR_CODE_SUCCESS = "FETCH_QR_CODE_SUCCESS";
export const FETCH_QR_CODE_FAILURE = "FETCH_QR_CODE_FAILURE";

// Action Creators
export const fetchQRCodeRequest = () => ({
  type: FETCH_QR_CODE_REQUEST,
});

export const fetchQRCodeSuccess = (url) => ({
  type: FETCH_QR_CODE_SUCCESS,
  payload: url,
});

export const fetchQRCodeFailure = (error) => ({
  type: FETCH_QR_CODE_FAILURE,
  payload: error,
});
// Async Action Creator
export const getQRCode = () => {
  return async (dispatch) => {
    dispatch(fetchQRCodeRequest());

    try {
      // Step 1: Retrieve userData from local storage
    
      const userDataString = sessionStorage.getItem("userData");
      if (!userDataString) {
        throw new Error("User data not found in local storage");
      }

      console.log("Retrieved userData:", userDataString); // Log the retrieved userData

      // Step 2: Parse the JSON string
      const userData = JSON.parse(userDataString);

      // Step 3: Extract tokenDto from userData
      const tokenDto = userData.tokenDto;
      if (!tokenDto) {
        throw new Error("Token data not found in userData");
      }

      console.log("Retrieved tokenDto:", tokenDto); // Log the retrieved tokenDto

      // Step 4: Extract required fields from tokenDto
      const token = tokenDto.token;
      const clientId = tokenDto.clientId;
      const clientsecret = tokenDto.clientSecret;
      const contentType = "application/json";
      const EmailId = tokenDto.emailId;
      console.log(contentType);

      console.log("Email ID:", EmailId);
      console.log("Client ID:", clientId);
      console.log("Client Secret:", clientsecret);

      // Step 6: Make the API request with fetch using the extracted values
      const response = await fetch(`https://oxygentestenv01.oxygen-global.com/cardholderadmin/gAuth/get/qrcode/${EmailId}`, {
        method: 'GET',
        headers: {
          'clientID': clientId,
          'clientsecret': clientsecret,
          'Content-Type': 'application/json',
        },
      });
        if(response){

          const responseData = await response.json();
          const qrCodeUrl = responseData.qrCode;
          
          sessionStorage.setItem("qrcode" , qrCodeUrl)
        }
      if (!response.ok) {
        let errorMessage = 'Unknown error occurred';
        if (response.status === 401) {
          errorMessage = 'Unauthorized: Check your authentication credentials';
        } else {
          errorMessage = `HTTP error! Status: ${response.status}`;
        }
        throw new Error(errorMessage);
      }

      // const responseData = await response.json();
      // const qrCodeUrl = responseData.qrCode;
      // window.localstorage.setItem("qrcode" , qrCodeUrl)
      dispatch(fetchQRCodeSuccess(qrCodeUrl));
      console.log("QR Code URL correct:", qrCodeUrl);
    } catch (error) {
      console.error("Error:", error);
      dispatch(fetchQRCodeFailure(error.message));
    }
  };
};
