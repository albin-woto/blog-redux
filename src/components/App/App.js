import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'Ayrton',
          email: 'ayrton@senna.com',
          link: 'ayrton.com',
        },
        {
          name: 'Kimi',
          email: 'kimi@f1.com',
          link: 'kimi.com',
        },
      ],
    };
  }

  completeRows = () =>
    this.state.users.map((user) => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.link}</td>
      </tr>
    ));

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ this.completeRows() }</tbody>
      </table>
    );
  }
}

export default App;
