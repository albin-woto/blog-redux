import React from 'react';
import './Card.css';

import Gravatar from '../Gravatar/Gravatar';

const Card = (props) => {
  const { users } = props;
  return (
    <article className="card">
      <div className="card-info">
        <Gravatar className="card-avatar" email={users.email} alt="Avatar" />
        <h5 className="card-title">Title</h5>
      </div>
      <h6 className="card-author">
        from <strong>{users.name}</strong>
        <br />
        in <strong>{users.website}</strong>
      </h6>
      <p className="card-body">
        Quia et suscipit suscipit recusandae consequuntur expedita et cum
        reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
        rem eveniet architecto
      </p>
    </article>
  );
};

export default Card;
