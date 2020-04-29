import React from 'react';
import Card from './Card.jsx'

export default function Cards(props) {
  // acá va tu códi {}
 
 
  // tip, podés usar un map
  //<Card name={nombreCiudad} max={tempMax} min={tempMin} img={iCon}/>
  return  props.cities.map(
    (e) => <Card 
              name={e.name} 
              max={e.main.temp_max} 
              min={e.main.temp_min} 
              img={e.weather[0].icon} 
              onClose={() => alert(e.name)}     
          />
  );
};
