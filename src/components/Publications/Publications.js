import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

class Publications extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAllUsers();
    }
  }

  render() {
    return (
      <div>
        <h1>Publications of {this.props.users.name}</h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Publications);
