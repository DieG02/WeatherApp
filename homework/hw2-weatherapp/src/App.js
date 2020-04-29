import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
//Par simular con el ejecicio anterior
//import data from './data.js';

function App(){
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    var apiKey = '82fc4adcf8c3c99b6c4309738d67f4f0';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        setCities(oldCities => [...oldCities, recurso]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(cities => cities.id !== id));
    console.log(cities.id);
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}

export default App;
