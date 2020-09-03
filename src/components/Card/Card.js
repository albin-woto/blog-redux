import React from 'react';

import './Card.css';

const Card = () => {
  return (
    <article className="card">
      <div className="card-info">
        <h4 className="card-title">Title</h4>
        <h6 className="card-author">
          from <strong>Name</strong>
          <br />
          in <strong>website</strong>
        </h6>
      </div>
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
