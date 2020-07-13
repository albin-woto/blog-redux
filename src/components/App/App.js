import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({
      users: response.data,
    });
  }

  completeRows = () =>
    this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
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
        <tbody>{this.completeRows()}</tbody>
      </table>
    );
  }
}

export default App;
