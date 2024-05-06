'use client'
import React from "react";

// HOC for authentication
const requireAuth = (Component) => {
    const AuthenticatedComponent = ({ isAuthenticated, router, ...props }) => {
      React.useEffect(() => {
        if (!isAuthenticated) {
          router.push('/login');
        }
      }, [isAuthenticated, router]);
  
      return isAuthenticated ? <Component {...props} /> : null;
    };
  
    return AuthenticatedComponent;
  };
  
  export default requireAuth;
  