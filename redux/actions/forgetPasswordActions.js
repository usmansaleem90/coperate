// Action types
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

// Action creator
export const forgotPasswordRequest = (username, router) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });

  try {
    // Build the URL for the request
    const url = `https://oxygentestenv01.oxygen-global.com/cardholderadmin/public/validateUserId/${username}`;

    // Define headers for the request
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Send GET request using fetch
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response JSON
    const responseData = await response.json();

    // Save responseData in local storage
    window.localstorage.setItem('userData', JSON.stringify(responseData));

    // Navigate to a new screen (replace '/new-screen' with the actual path)
    router.push('/forgot-password/new-password');

    // Dispatch success action with response data
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: responseData,
    });

    // Log successful response
    console.log('Forgot password request successful:', responseData);
  } catch (error) {
    // Log the error
    console.error('Forgot password request failed:', error);

    // Dispatch failure action with error message
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: error.message,
    });
  }
};
