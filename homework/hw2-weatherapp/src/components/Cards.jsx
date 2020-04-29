import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {

  
  return (
    <div className='cards'>
      {cities.map(c => <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </div>
  );
}
