import React from 'react';
import './CardList.style.css';
import { Card } from '../card/Card';

export const CardList = (props) => {
  console.log(props);
  return (
    <div className='card-list'>
      {props.kittens.map((kitten) => (
        <Card key={kitten.id} kitten={kitten} />
      ))}
    </div>
  );
};
