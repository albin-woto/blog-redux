import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import './Users.css';

class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  getContent = () => {
    if (this.props.loading) {
      return <Loader />;
    }

    if (this.props.error) {
      return <Error message={this.props.error}/>;
    }
    
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
  };

  completeRows = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <>
        {this.getContent()}
      </>
    );
  }
}

// mapState recieves the state from store and props of the component itself
const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Users);
