import axios from 'axios';

// Action Types
export const NEW_PASSWORD_REQUEST = 'NEW_PASSWORD_REQUEST';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAILURE = 'NEW_PASSWORD_FAILURE';

// Action Creators
export const newPasswordRequest = () => ({
  type: NEW_PASSWORD_REQUEST,
});

export const newPasswordSuccess = () => ({
  type: NEW_PASSWORD_SUCCESS,
});

export const newPasswordFailure = (error, password, totp) => ({
  type: NEW_PASSWORD_FAILURE,
  payload: { error, password, totp },
});

// Thunk to handle async API call for changing password with password validation
export const changePassword = (password, totp,router) => {
  return async (dispatch) => {
    dispatch(newPasswordRequest());
    try {
      // Password validation
      if (!validatePassword(password)) {
        throw new Error(
          'Password must be at least 8 characters long, contain at least one uppercase letter, and at least one special character.'
        );
      }

      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData || !userData.accountId) {
        throw new Error('User data not found in local storage or missing userId');
      }

      // Make API call to change password
      const response = await axios.post('https://oxygentestenv01.oxygen-global.com/cardholderadmin/corporateOrdering/validate/totp/ForgotPassword', {
        password,
        totp,
        userId: userData.accountId, // Use userId from user data
      });
      dispatch(newPasswordSuccess());
      console.log('Password changed successfully!');
      console.log('Response:', response.data);
      router.push('/login')
    } catch (error) {
      dispatch(newPasswordFailure(error.message, password, totp, localStorage.getItem('userId')));
      console.error('Error changing password:', error.message);
      console.log('Password:', password);
      console.log('TOTP:', totp);
      console.log('User ID:', localStorage.getItem('userId'));
    }
  };
};

// Function to validate password
const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
  return passwordRegex.test(password);
};