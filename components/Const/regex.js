 
export  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const  phoneRegex = /^\+1(\d{10}|\d{3}[-\s]\d{3}[-\s]\d{4})$/;
export const NAME_REGEX = /[^a-zA-Z0-9\s@.]/g;
export const SEARCH_REGEX = /[^a-zA-Z0-9\s@.]/g;
export const PHONE_REGEX = /^\+1\d{10}$/;
export const phone_Regex = /[^0-9+]/g;
export const lowerCaseRegex = /[a-z]/;
export const upperCaseRegex = /[A-Z]/;
export const numberRegex = /[0-9]/;
export const minLengthRegex = /.{8,}/; 
export const specialCharRegex  =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
export const maxLengthRegex = /.{32,}/; 
export const spaceRegex  =/\s/g;