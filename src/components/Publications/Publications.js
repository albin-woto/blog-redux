import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as publicationActions from '../../actions/publicationActions';

class Publications extends Component {
  componentDidMount() {
    console.log('props mount', this.props);
    this.props.getAllPublications();
    if (!this.props.userReducer.users.length) {
      this.props.getAllUsers();
    }
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        {/* <h1>Publications of {this.props.users.name}</h1> */}
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
