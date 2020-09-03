import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

import Card from '../Card/Card';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import './Trending.css';

class Trending extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getAllUsers();
    }
  }

  getTopUsers = () => {
    if (this.props.loading) {
      return <Loader />;
    }

    if (this.props.error) {
      return <Error message={this.props.error} />;
    }

    const topUsers = this.props.users.slice(0, 3);
    console.log('top', topUsers);

    return topUsers.map((user) => <Card users={user} key={user.id}/>);
  };

  render() {
    return (
      <section className="trending-container">
        <h4 className="trending-title">Trending</h4>
        {this.getTopUsers()}
      </section>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(Trending);
