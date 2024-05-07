// utils/auth.js

import { useRouter } from 'next/router';

// Function to check if the token is expired
export const isTokenExpired = (expiryDate) => {
  const now = new Date();
  return now.getTime() > new Date(expiryDate).getTime();
};

    