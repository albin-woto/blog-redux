import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as userActions from '../../actions/userActions';

import './UserTable.css';

const UserTable = (props) => {
  const completeRows = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td>
          <Link to={`/publications/${key}`}>
            <div className="eye icon"></div>
          </Link>
        </td>
      </tr>
    ));

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{completeRows()}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps, userActions)(UserTable);
