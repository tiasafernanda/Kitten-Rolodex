import React from 'react';
import './Card.style.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt='' src={`https://robohash.org/${props.kitten.id}?set=set4&size=200x200`} />
      <h2>{props.kitten.name}</h2>
      <p>{props.kitten.email}</p>
    </div>
  );
};
