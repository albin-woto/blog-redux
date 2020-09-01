import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationActions from '../../actions/publicationActions';

import './Publications.css';

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

  showPublications = () => {
    const {
      userReducer,
      userReducer: { users },
      publicationReducer,
      publicationReducer: { publications },
      match: {
        params: { key },
      },
    } = this.props;

    if (!users.length) return;
    if (userReducer.error) return;

    if (publicationReducer.loading) {
      return <Loader />;
    }
    if (publicationReducer.error) {
      return <Error message={publicationReducer.error} />;
    }
    if (!publications.length) return;
    if (!('publications_index' in users[key])) return;

    const { publications_index } = users[key];
    return (
      <section>
        {publications[publications_index].map((publication) => (
          <article 
            className="publication"
            key={ publication.id }
            >
            <h3 className="publication-title">
              {'Title: ' + publication.title}
            </h3>
            <p className="publication-body">{publication.body}</p>
          </article>
        ))}
      </section>
    );
  };

  render() {
    console.log('props', this.props);
    return (
      <>
        {this.showUser()}
        {this.showPublications()}
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
