import React from 'react';

import './App.css';

const App = () => {
  const completeRow = () => [
    <tr>
      <td>Ayrton</td>
      <td>ayrton@senna.com</td>
      <td>ayrton.com</td>
    </tr>,
    <tr>
      <td>Kimi</td>
      <td>kimi@f1.com</td>
      <td>kimi.com</td>
    </tr>,
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
      </thead>
      <tbody>
        { completeRow() }
      </tbody>
    </table>
  );
};

export default App;
