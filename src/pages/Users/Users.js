import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import UserTable from '../../components/UserTable/UserTable';

import './Users.css';

class Users extends Component {
  componentDidMount() {
    if(!this.props.users.length){
      this.props.getAllUsers();
    }
  }

  getContent = () => {
    if (this.props.loading) {
      return <Loader />;
    }

    if (this.props.error) {
      return <Error message={this.props.error} />;
    }

    return <UserTable users={this.props.users} />;
  };

  render() {
    return (
      <main className="main-container">
        <h1 className="user title">
          Users
        </h1>
        {this.getContent()}
      </main>
    );
  }
}

// mapState recieves the state from store and props of the component itself
const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Users);
