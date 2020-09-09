import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationActions from '../../actions/publicationActions';

import './Publications.css';

import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import Gravatar from '../Gravatar/Gravatar';

class Publications extends Component {
  // To assure that the users are available before the call of getPublicationsByUser
  // I made the componentDidMount async and await for getAllUsers
  async componentDidMount() {
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

    return (
      <div className="publication-header">
        <h1 className="author-title">
          Publications of <strong>{userReducer.users[key].name}</strong>
        </h1>
        <Gravatar
          className="publication-avatar"
          email={
            this.props.userReducer.users[this.props.match.params.key].email
          }
          alt="Avatar"
        />
      </div>
    );
  };

  validatePublications = () => {
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

    return this.displayPublications(
      publications[publications_index],
      publications_index
    );
  };

  displayPublications = (publications, publications_index) => {
    return (
      <>
        {publications.map((publication) => (
          <article className="publication" key={publication.id}>
            <h3 className="publication-title">
              {'Title: ' + publication.title}
            </h3>
            <p className="publication-body">{publication.body}</p>
          </article>
        ))}
      </>
    );
  };

  render() {
    return (
      <section>
        {this.showUser()}
        {this.validatePublications()}
      </section>
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
