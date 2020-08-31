import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationActions from '../../actions/publicationActions';

class Publications extends Component {
  // To assure that the users are available before the call of getPublicationsByUser
  // I made the componentDidMount async and await for getAllUsers
  async componentDidMount() {
    console.log('props mount', this.props);
    if (!this.props.userReducer.users.length) {
      await this.props.getAllUsers();
    }
    this.props.getPublicationByUser(
      this.props.userReducer.users[this.props.match.params.key].id
    );
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <h1>
          Publications of{' '}
          {this.props.userReducer.users[this.props.match.params.key].name}
        </h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer, publicationReducer }) => {
  return {
    userReducer,
    publicationReducer,
  };
};

const mapDispatchToProps = {
  ...userActions,
  ...publicationActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
