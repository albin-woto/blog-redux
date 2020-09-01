import React from 'react';

import './Error.css';

const Error = (props) => {
  return(
    <div className="error-container">
      <h1 className="error-message">
        Ups! Something went wrong, <strong>please try again later.</strong>
      </h1>
      <h3 className="error-description">
        {props.message}
      </h3>
    </div>
  );
};

export default Error;
