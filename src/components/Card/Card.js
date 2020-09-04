import React from 'react';
import './Card.css';

import Gravatar from '../Gravatar/Gravatar';

const Card = (props) => {
  const {users} = props;
  return (
    <article className="card">
      <div className="card-info">
        <Gravatar 
          className="card-avatar"
          email={users.email}
          alt="Avatar"
        />
        <h4 className="card-title">Title</h4>
      </div>
        <h6 className="card-author">
          from <strong>{users.name}</strong>
          <br />
          in <strong>{users.website}</strong>
        </h6>
      <p className="card-body">
        loremipsumkaj ajsdnajsn alsjfnalsfnl lajknflansf asjdfa ajshfkajsh ajsfh
        akjsfh ajsdfh akjsfh jahsfkjashdf ajsfhkas asfasjf ha osfhoas oaifhs oai
        hso hoaisfh aosifh oaishfoiash f aiohsf oiahsf oaisfh oaihsf oaisfh
        oiahs f
      </p>
    </article>
  );
};

export default Card;
