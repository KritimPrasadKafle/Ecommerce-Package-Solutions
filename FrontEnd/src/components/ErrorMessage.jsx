import React from 'react';

//Displays an error message if provided
function ErrorMessage({ message }) {
  return message ? <p className="error-message">{message}</p> : null;
};

export default ErrorMessage;
