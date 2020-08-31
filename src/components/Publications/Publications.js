import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationActions from '../../actions/publicationActions';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';

class Publications extends Component {
  // To assure that the users are available before the call of getPublicationsByUser
  // I made the componentDidMount async and await for getAllUsers
  async componentDidMount() {
    console.log('props mount', this.props);
    // Destructuring for better and cleaner code
    // The last one is the destructuring of this.props.match.params.key
    const {
      getAllUsers,
      getPublicationByUser,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.userReducer.users.length) {
      await getAllUsers();
    }
    if (!('publications_index' in this.props.userReducer.users[key]))
      getPublicationByUser(this.props.userReducer.users[key].id);
  }

  showUser = () => {
    const {
      userReducer,
      match: {
        params: { key },
      },
    } = this.props;

    if (userReducer.error) {
      return <Error message={userReducer.error} />;
    }
    if (!userReducer.users.length || userReducer.loading) {
      return <Loader />;
    }

    return <h1>Publications of {userReducer.users[key].name}</h1>;
  };

  render() {
    console.log('props', this.props);
    return (
      <>
        { this.showUser() }
      </>
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
