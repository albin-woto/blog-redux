import React from 'react';

import './Error.css';

const Error = (props) => {
  return(
    <div className="error-container">
      <h1>
        Ups! Algo salió mal, <strong>por favor intenta más tarde</strong>
      </h1>
    </div>
  );
};

export default Error;
